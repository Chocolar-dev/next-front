import imagemin from "file://C:\\Users\\USURIO\\AppData\\Roaming\\npm\\node_modules\\imagemin\\index.js"
import webp from "file://C:\\Users\\USURIO\\AppData\\Roaming\\npm\\node_modules\\imagemin-webp\\index.js"
const outputFolder = './compressed'
const produceWebP = async () => {
    await imagemin(['./*.webp'], {
        destination: outputFolder,
        plugins: [
            webp({
                quality: 15
            })
        ]
    })
    console.log('PNGs processed')
    await imagemin(['./*.{jpg,jpeg}'], {
        destination: outputFolder,
        plugins: [
            webp({
                quality: 45
            })
        ]
    })
    console.log('JPGs and JPEGs processed')
}
produceWebP()