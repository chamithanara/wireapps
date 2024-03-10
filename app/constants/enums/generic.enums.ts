enum HttpMethods {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Delete = 'delete',
    Patch = 'patch'
}

enum DeviceOrientationTypes {
    'PORTRAIT' = 'PORTRAIT',
    'PORTRAIT-UPSIDEDOWN' = 'PORTRAIT-UPSIDEDOWN',
    'LANDSCAPE-LEFT' = 'LANDSCAPE-LEFT',
    'LANDSCAPE-RIGHT' = 'LANDSCAPE-RIGHT',
    'FACE-UP' = 'FACE-UP',
    'FACE-DOWN' = 'FACE-DOWN',
    'UNKNOWN' = 'UNKNOWN'
}

enum StockStatus {
    IN_STOCK = 'IN STOCK',
    OUT_STOCK = 'OUT STOCK'
}

export { HttpMethods, DeviceOrientationTypes, StockStatus };
