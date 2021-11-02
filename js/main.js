document.addEventListener('animationstart', function (e) {
  if (e.animationName === 'fade-in') {
    e.target.classList.add('did-fade-in');
  }
});

document.addEventListener('animationend', function (e) {
  if (e.animationName === 'fade-out') {
    e.target.classList.remove('did-fade-in');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  hljs.initHighlightingOnLoad();

  const codeBlock = document.getElementById('code');
  const copyButton = document.getElementById('copy-button');
  const copySuccess = document.getElementById('copy-success');

  const copyTextHandler = () => {
    const text = codeBlock.innerText;

    navigator.clipboard.writeText(text).then(
      () => {
        copySuccess.classList.add('show-message');
        setTimeout(() => {
          copySuccess.classList.remove('show-message');
        }, 2500);
      },
      () => {
        console.log('Error writing to the clipboard');
      }
    );
  };

  copyButton.addEventListener('click', copyTextHandler);
});
