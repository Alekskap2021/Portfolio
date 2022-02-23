function tabs(tabsBtn, parentTabsBtn, imgContent, activeClass) {
	// Tabs

	const tabs = document.querySelectorAll(tabsBtn),
		parentTabs = document.querySelector(parentTabsBtn),
		tabContent = document.querySelectorAll(imgContent);

	function hideTabs() {

		tabContent.forEach((tab, i) => {
			tab.style.display = `none`;
		});

		tabs.forEach(tab => {
			tab.classList.remove(activeClass);
		});

	}

	function showTabs(i = 0) {
		tabContent[i].style.display = `block`;
		tabs[i].classList.add(activeClass);
	}

	hideTabs();
	showTabs();

	parentTabs.addEventListener(`click`, (e) => {
		const target = e.target;

		if (target && target.classList.contains(tabsBtn.slice(1))) {

			tabs.forEach((tab, i) => {

				if (target == tab) {
					hideTabs();
					showTabs(i);
				}

			});
		}
	});
}

export default tabs;