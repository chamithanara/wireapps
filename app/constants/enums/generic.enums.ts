enum HttpMethods {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Delete = 'delete',
    Patch = 'patch'
}

enum HttpCodes {
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500,
    CONTENT_UNAVAILABLE = 404
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

export { HttpMethods, DeviceOrientationTypes, HttpCodes };
