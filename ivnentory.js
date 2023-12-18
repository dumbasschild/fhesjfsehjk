new MutationObserver(() => {
  if (window.location.href.includes("https://kirka.io/servers/")) {
    document.getElementsByClassName("message trade").forEach(_0x472622 => {
      _0x472622.children.forEach(_0x181547 => {
        if (_0x181547.innerText.includes("/trade accept")) {
          _0x181547.style.backgroundColor = '#692c8c';
          _0x181547.addEventListener("click", function () {
            document.getElementById("WMNn").value = _0x181547.innerText;
            document.getElementById("WMNn").value += 'a';
            document.getElementById("WMNn").focus();
          });
        }
      });
    });
    if (document.getElementById('WMNn')) {
      document.getElementById("WMNn").addEventListener('keydown', ({
        key: _0x4ea552
      }) => {
        if (_0x4ea552 === 'Enter') {
          if (document.getElementById("WMNn").value.includes("/trade accept ")) {
            setTimeout(() => {
              document.getElementById('WMNn').value = "/trade confirm";
              document.getElementById('WMNn').value += 'a';
              document.getElementById("WMNn").focus();
            }, 0x64);
            setTimeout(() => {
              if (document.getElementById("WMNn").value.includes("/trade accept ")) {
                document.getElementById("WMNn").value = "/trade confirm";
                document.getElementById("WMNn").value += 'a';
                document.getElementById("WMNn").focus();
              }
            }, 0x64);
            setTimeout(() => {
              if (document.getElementById("WMNn").value.includes("/trade accept ")) {
                document.getElementById("WMNn").value = "/trade confirm";
                document.getElementById('WMNn').value;
                document.getElementById("WMNn").focus();
              }
            }, 0x12c);
          }
        }
      });
    }
  }
}).observe(document, {
  'subtree': true,
  'childList': true
});
