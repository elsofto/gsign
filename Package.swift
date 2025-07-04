// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Gsign",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "Gsign",
            targets: ["GSignPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "GSignPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/GSignPlugin"),
        .testTarget(
            name: "GSignPluginTests",
            dependencies: ["GSignPlugin"],
            path: "ios/Tests/GSignPluginTests")
    ]
)