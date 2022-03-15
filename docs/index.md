---
permalink: index
---

# Artistic Reality Group 17

EECS 1720 GROUP PROJECT

## AR content for phaze 2

As they are updated you can find links to examples of the different types of AR.

1. First, navigate to an example of using a `JavaScript` button to open the `AR` content we looked at [today](website/pages/index-1.html)


<button type="button" onclick="openTab('index-1.html')">Camera</button>

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
