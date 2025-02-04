function FindProxyForURL(url, host) {
    if (host == "www.wieistmeineip.de") {
        return "proxy 194.164.62.240:3128";
    }
    return "DIRECT";
}
