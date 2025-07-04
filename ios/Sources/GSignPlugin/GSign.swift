import Foundation

@objc public class GSign: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
