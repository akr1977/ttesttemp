function FindProxyForURL(url, host) {
    if ((shExpMatch(host, "*.de")) || (shExpMatch(host,"*.udemy.com"))  || (shExpMatch(host,"*.chatgpt.com"))) {
        return "PROXY 194.164.62.240:3128";
    }
    return "DIRECT";
}
