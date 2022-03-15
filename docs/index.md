---
permalink: index
---

# Artistic Reality Group 17

Just a little site example

## AR content

As they are updated you can find links to examples of the different types of AR.

1. First, navigate to an example of using a `JavaScript` button to open the `AR` content we looked at [today](website/pages/index-1.html)


<button type="button" onclick="openTab('pages/index-1.html')">Camera</button>

<script>
function openTab(url) {
const link = document.createElement('a');
link.href = url;
link.target = '\_blank';
document.body.appendChild(link);
link.click();
link.remove();
}
</script>
