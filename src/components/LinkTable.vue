<template>
<table class="table-auto w-full text-sm">
    <tr>
        <td><b>SELF</b></td>
        <Link url="https://mail.google.com/mail/u/0/#inbox" name="gmail"/>
        <Link url="https://www.facebook.com/" name="facebook"/>
    </tr>
    <tr>
        <td><b>READ</b></td>
        <Link url="https://www.reddit.com/" name="reddit"/>
        <Link url="https://medium.com/" name="medium"/>
    </tr>
    <tr>
        <td><b>SCHOOL</b></td>
        <Link url="https://mail.google.com/mail/u/1/#inbox" name="mail"/>
        <Link url="https://mica.instructure.com/" name="canvas"/>
    </tr>
    <tr>
        <td><b>DEV</b></td>
        <Link url="https://github.com/" name="github"/>
        <Link url="https://stackoverflow.com/" name="stack overflow"/>
    </tr>
    <tr>
        <td><b>DESIGN</b></td>
        <Link url="https://www.awwwards.com/" name="awwwards."/>
        <Link url="https://muz.li/" name="muzli"/>
    </tr>
</table>
</template>

<script>
import Link from './Link.vue'

export default {
    name: "LinkTable",
    components: {Link}
}
</script>