import { Button, Composite, TextView, WebView, ui } from 'tabris';

let text = "kosong"

ui.contentView.append(
    <composite left={0} right={0} top={0} bottom={0}>
        <webView  left={0} right={0} top={0} bottom={0} url='http://fe-omah.chickenkiller.com/'/>
    </composite>
);

function change(){

}