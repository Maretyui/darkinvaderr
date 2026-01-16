
# Go to source folder
pm2 delete darkinvaderr.com
cd /mnt/data/web-apps/darkinvaderr

# Remove old builds & node_modules (optional, clean build)
rm -rf .next node_modules
npm cache clean --force
npm install --force

# Load env vars
export $(grep -v '^#' .env.local | xargs)

# Build the app
npm run build

# Go to deployment folder
sudo rm -rf /mnt/data/website/darkinvaderr.com/*

# Copy only what is needed for running the built Next.js app
sudo cp -r package.json package-lock.json .next public node_modules .env.local /mnt/data/website/darkinvaderr.com/

# Fix permissions
sudo chown -R $USER:$USER /mnt/data/website/darkinvaderr.com
sudo chmod -R 755 /mnt/data/website/darkinvaderr.com

# Go to deployment folder
cd /mnt/data/website/darkinvaderr.com

# Load env vars
export $(grep -v '^#' .env.local | xargs)

# Start app on 3001
pm2 start npm --name darkinvaderr.com -- start -- -p 3002

# Tail logs
pm2 logs darkinvaderr.com
