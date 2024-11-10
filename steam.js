/*
[rewrite_local]
# > Steam Guard Extractor
^https?:\/\/api\.steampowered\.com\/ITwoFactorService\/AddAuthenticator url script-response-body https://raw.githubusercontent.com/missuo/SteamGuardExtractor/refs/heads/main/steam.js
[mitm] 
hostname = api.steampowered.com
*/

var body = $response.body;
const secretMatch = body.match(/secret=([A-Z0-9]+)/);
if (secretMatch) {
    const secret = secretMatch[1];
    console.log("Secret:", secret);
    $notify("Click to Copy Secret", {"update-pasteboard": secret});
} else {
    console.log("Secret not found");
    $notify("Secret not found")
}
$done({body});
