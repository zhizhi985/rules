console.log('vgtime-开屏页');
let body = JSON.parse($response.body);
if (!body.data?.ad) {
    console.log(`body:${$response.body}`);
    $notification.post('vgTime', "vgtime", "data/ad字段为空");
} else {
    body.data.ad = null;
    console.log('成功');
}
body = JSON.stringify(body);

$done({
    body
});

