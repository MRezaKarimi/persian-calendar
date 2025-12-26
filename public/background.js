(function () {
  "use strict";

  function convertPersianToEnglish(str) {
    const persianMap = "۰۱۲۳۴۵۶۷۸۹";

    return str.replace(/[۰-۹]/g, (match) => {
      return persianMap.indexOf(match);
    });
  }

  function getJalaliDay() {
    const day = new Date().toLocaleDateString("fa").split("/").pop();
    return Number(convertPersianToEnglish(day));
  }

  function drawIcon(day, size = 128) {
    if (typeof OffscreenCanvas === "undefined") {
      throw new Error("OffscreenCanvas not supported in this environment");
    }
    const canvas = new OffscreenCanvas(size, size);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, size, size);

    // Day number only (theme color)
    const text = String(day);
    ctx.fillStyle = "#00598a";
    // maximize the number size to fill the canvas
    let fontSize = size;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold ${fontSize}px sans-serif`;
    // shrink font until it fits within the canvas
    while (fontSize > 6 && ctx.measureText(text).width > size) {
      fontSize -= 1;
      ctx.font = `bold ${fontSize}px sans-serif`;
    }
    ctx.fillText(text, size / 2, size / 2);

    return ctx.getImageData(0, 0, size, size);
  }

  function buildImageDataMap(day) {
    const sizes = [16, 32, 48, 128];
    const map = {};
    for (const sz of sizes) {
      map[sz] = drawIcon(day, sz);
    }
    return map;
  }

  async function updateIconAndTooltip() {
    try {
      const day = getJalaliDay();
      const tooltip = new Date().toLocaleDateString("fa");
      const imageDataMap = buildImageDataMap(day);

      if (typeof chrome !== "undefined" && chrome.action) {
        if (chrome.action.setIcon) {
          chrome.action.setIcon({ imageData: imageDataMap });
        }
        if (chrome.action.setTitle) {
          chrome.action.setTitle({ title: tooltip });
        }
      }

      if (typeof browser !== "undefined" && browser.action) {
        if (browser.action.setIcon) {
          try {
            browser.action.setIcon({ imageData: imageDataMap });
          } catch (e) {
            // Some Firefox versions may expect a different shape; try per-size set
            for (const sz of Object.keys(imageDataMap)) {
              browser.action.setIcon({
                iconIndex: 0,
                imageData: imageDataMap[sz],
              });
            }
          }
        }
        if (browser.action.setTitle) {
          browser.action.setTitle({ title: tooltip });
        }
      }
    } catch (e) {
      console.error("Failed to update extension icon or tooltip:", e);
    }
  }

  function scheduleDailyAlarm() {
    try {
      const now = new Date();
      const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      // create alarm at next local midnight and repeat daily
      if (chrome && chrome.alarms && chrome.alarms.create) {
        chrome.alarms.create("dailyUpdate", {
          when: next.getTime(),
          periodInMinutes: 24 * 60,
        });
      }
    } catch (e) {
      console.error("Failed to schedule alarm", e);
    }
  }

  // Listeners
  if (chrome && chrome.runtime) {
    chrome.runtime.onInstalled.addListener(() => {
      updateIconAndTooltip();
      scheduleDailyAlarm();
    });

    if (chrome.runtime.onStartup) {
      chrome.runtime.onStartup.addListener(() => {
        updateIconAndTooltip();
        scheduleDailyAlarm();
      });
    }

    if (chrome && chrome.alarms && chrome.alarms.onAlarm) {
      chrome.alarms.onAlarm.addListener((alarm) => {
        if (alarm && alarm.name === "dailyUpdate") updateIconAndTooltip();
      });
    }

    // run once when the worker is loaded
    updateIconAndTooltip();
  }
})();
