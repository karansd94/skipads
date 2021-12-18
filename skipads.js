const adModule = document.querySelector(".ytp-ad-module");
const skipButton =document.querySelector(".ytp-ad-skip-button")
const config = { attributes: true, childList: true, subtree: true };
const callback = (mutationList) => {
  mutationList.forEach(() => {
    if (
      document.querySelector(".ytp-ad-preview-text") &&
      skipButton
    ) {
      skipButton.click();
    }
  });
};
const mutationObserver = new MutationObserver(callback);

mutationObserver.observe(adModule, config);
