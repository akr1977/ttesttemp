function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.de")) {
        return "PROXY 194.164.62.240:3128";
    }
    return "DIRECT";
}
