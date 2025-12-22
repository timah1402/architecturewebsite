const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: ".env.local" });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configuration
const FOLDERS_TO_UPLOAD = [
  {
    localPath: "/home/akhad/Downloads/Telegram-Desktop/filmera",
    cloudinaryFolder: "filmera",
  },
  {
    localPath: "/home/akhad/Downloads/Telegram-Desktop/mr-cisse",
    cloudinaryFolder: "mr-cisse",
  },
  {
    localPath: "/home/akhad/Downloads/Telegram-Desktop/mr-niang",
    cloudinaryFolder: "mr-niang",
  },
  {
    localPath: "/home/akhad/Downloads/Telegram-Desktop/mr-soumare",
    cloudinaryFolder: "mr-soumare",
  },
  {
    localPath: "/home/akhad/Downloads/Telegram-Desktop/mr-youm",
    cloudinaryFolder: "mr-youm",
  },
  {
    localPath: "/home/akhad/Downloads/Telegram-Desktop/mr-mbow",
    cloudinaryFolder: "mr-mbow",
  },
];

// Supported file extensions
const IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".svg",
  ".bmp",
];
const VIDEO_EXTENSIONS = [
  ".mp4",
  ".mov",
  ".avi",
  ".mkv",
  ".webm",
  ".flv",
  ".wmv",
  ".m4v",
];

/**
 * Get all media files (images and videos) from a local directory
 */
function getMediaFiles(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Local folder not found: ${dirPath}`);
    return { images: [], videos: [] };
  }

  const files = fs.readdirSync(dirPath);
  const images = [];
  const videos = [];

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (IMAGE_EXTENSIONS.includes(ext)) {
      images.push(file);
    } else if (VIDEO_EXTENSIONS.includes(ext)) {
      videos.push(file);
    }
  });

  return { images, videos };
}

/**
 * Check if a resource already exists in Cloudinary
 */
async function resourceExists(publicId, resourceType = "image") {
  try {
    await cloudinary.api.resource(publicId, { resource_type: resourceType });
    return true;
  } catch (error) {
    if (error.error?.http_code === 404) {
      return false;
    }
    throw error;
  }
}

/**
 * Upload a file to Cloudinary
 */
async function uploadFile(localFilePath, cloudinaryFolder, isVideo = false) {
  const fileName = path.basename(localFilePath, path.extname(localFilePath));
  const publicId = `${cloudinaryFolder}/${fileName}`;
  const resourceType = isVideo ? "video" : "image";

  try {
    // Check if already exists
    const exists = await resourceExists(publicId, resourceType);
    if (exists) {
      console.log(`  ⏭️  Skipped (already exists): ${publicId}`);
      return { success: true, skipped: true };
    }

    console.log(
      `  📤 Uploading ${isVideo ? "video" : "image"}: ${path.basename(
        localFilePath
      )} -> ${publicId}`
    );

    const result = await cloudinary.uploader.upload(localFilePath, {
      public_id: publicId,
      resource_type: resourceType,
      folder: cloudinaryFolder,
      use_filename: false,
      unique_filename: false,
      // Video-specific options
      ...(isVideo && {
        chunk_size: 6000000, // 6MB chunks for large video files
      }),
    });

    console.log(`  ✅ Success: ${result.public_id}`);
    return { success: true, result };
  } catch (error) {
    console.error(
      `  ❌ Error uploading ${localFilePath}:`,
      error.error?.message || error.message
    );
    return { success: false, error };
  }
}

/**
 * Process a single folder
 */
async function processFolder(localPath, cloudinaryFolder) {
  console.log(`\n📁 Processing folder: ${cloudinaryFolder}`);
  console.log(`   Local path: ${localPath}`);

  // Get all media files from local directory
  const { images, videos } = getMediaFiles(localPath);

  if (images.length === 0 && videos.length === 0) {
    console.log(`   No media files found in ${localPath}`);
    return { uploaded: 0, skipped: 0, failed: 0 };
  }

  console.log(
    `   Found ${images.length} image(s) and ${videos.length} video(s)`
  );

  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  // Upload images
  for (const fileName of images) {
    const localFilePath = path.join(localPath, fileName);
    const result = await uploadFile(localFilePath, cloudinaryFolder, false);

    if (result.success) {
      if (result.skipped) {
        skipped++;
      } else {
        uploaded++;
      }
    } else {
      failed++;
    }
  }

  // Upload videos
  for (const fileName of videos) {
    const localFilePath = path.join(localPath, fileName);
    const result = await uploadFile(localFilePath, cloudinaryFolder, true);

    if (result.success) {
      if (result.skipped) {
        skipped++;
      } else {
        uploaded++;
      }
    } else {
      failed++;
    }
  }

  return { uploaded, skipped, failed };
}

/**
 * Main function
 */
async function main() {
  console.log("🚀 Starting Cloudinary upload process (images + videos)...\n");
  console.log(`Cloud Name: ${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}\n`);

  let totalUploaded = 0;
  let totalSkipped = 0;
  let totalFailed = 0;

  for (const folder of FOLDERS_TO_UPLOAD) {
    const stats = await processFolder(
      folder.localPath,
      folder.cloudinaryFolder
    );
    totalUploaded += stats.uploaded;
    totalSkipped += stats.skipped;
    totalFailed += stats.failed;
  }

  console.log("\n" + "=".repeat(50));
  console.log("📊 Summary:");
  console.log(`   ✅ Uploaded: ${totalUploaded}`);
  console.log(`   ⏭️  Skipped: ${totalSkipped}`);
  console.log(`   ❌ Failed: ${totalFailed}`);
  console.log("=".repeat(50));
  console.log("\n✨ Done! Images are at root level, videos are uploaded too!");
}

// Run the script
main().catch(console.error);
