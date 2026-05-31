// ==UserScript==
// @name         Hkefp's Osu! Layout
// @namespace    https://osu.ppy.sh/*
// @version      1.3
// @description  Made by Hkefp
// @author       Hkefp
// @match        https://osu.ppy.sh/users/*/*
// @match        https://osu.ppy.sh/users/*
// @match        https://osu.ppy.sh/beatmapsets/*
// @match        https://osu.ppy.sh/beatmapsets/*/*
// @match        https://osu.ppy.sh/beatmapsets
// @match        https://osu.ppy.sh/scores/*
// @match        https://osu.ppy.sh/community/matches/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`


/* ========================================================= Main profile */


.daily-challenge {
  display: none !important;
}
.profile-previous-usernames {
  display: none !important;
}
.rank-value {
  color: var(--value-color);
  font-weight: 300 !important;
  --colour: white !important;
}
.value-display--rank .value-display__value div {
  color: var(--value-color);
  font-weight: 30 !important;
  font-size: 20px !important;
  font-family: Torus, Inter, "Helvetica Neue", Tahoma, Arial, sans-serif !important;
  --colour: white !important;
}

.value-display__value{
  font-size: 17px;
}

.profile-info {
  --avatar-radius-extended-desktop: 100px;
  --avatar-size-extended-desktop: 65px;
  --content-height: 65px;
  --vertical-padding: 10px;
  --avatar-radius: 100px;
  --info-margin-extended-desktop: 10px;
  --info-margin: 10px;
}
.profile-info__icons--name-inline {
  margin-top: 7px;
  gap: 5px;
}

.profile-detail__values--grid{
  gap: 0px;
}

/* ========================================================= Score rank images */

.legacy-rank--S {
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-S%402X.png) !important;
}

.legacy-rank--X  {
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-X%402X.png) !important;
}

.legacy-rank--XH {
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-XH%402X.png) !important;
}

.legacy-rank--SH {
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-SH%402X.png) !important;
}

.legacy-rank--D  {
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-D%402X.png) !important;
}

.legacy-rank--A  {
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-A%402X.png) !important;
}

.legacy-rank--B  {
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscriptrefs/heads/main/ranks/ranking-B%402X.png) !important;
}

.legacy-rank--C  {
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-C%402X.png) !important;
}

.score-rank--XH{
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-XH-small%402X.png) !important;
}

.score-rank--X{
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-X-small%402X.png) !important;
}

.score-rank--SH{
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-SH-small%402X.png) !important;
}

.score-rank--S{
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-S-small%402X.png) !important;
}

.score-rank--A{
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-A-small%402X.png) !important;
}

.score-rank--B{
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-B-small%402X.png) !important;
}

.score-rank--C{
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-C-small%402X.png) !important;
}

.score-rank--D{
  background-image: url(https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/ranks/ranking-D-small%402X.png) !important;
}

/* ========================================================= Score Rank */

.beatmap-score-rank,
.score-rank,
[class*="score-rank"] {
  color: #f5c639 !important;
  background-color: transparent !important;
}

.mod--type-DifficultyIncrease {
  --type-bg-colour: #f5c639;
  --type-fg-colour: color-mix(in srgb-linear, #000, #f5c639 10%);
  --type-extender-colour: color-mix(in srgb, #000, #f5c639 26.3%);
}

.profile-rank-count {
  font-size: 14px;
  font-weight: normal;
  gap: 0;
}

.score-rank--tiny {
font-size: 16px;
}

.beatmap-score-top__position-number {
display: flex;
justify-content: center;
}

/* ========================================================= Follow, Sub & Message button */

.user-action-button__counter {
  padding-right: 13px;
  padding-bottom: 1px;
}

.user-action-button--profile-page {
  padding: 13px;
  min-width: 10px;
}

.btn-circle--page-toggle-detail {
  border-radius: 100%;
}

.play-detail__icon--main {
  margin-right: 0;
  margin-left: 3px;
  position: relative;
}

.play-detail__group--top {
 padding-left: 0px;
}

.profile-extra-entries__icon {
margin-right: 0;
margin-top: 1px;
}

/* ========================================================= Map Playount */

.beatmap-playcount__cover {
  height: 44.5px;
  width: 0px;
}

.beatmap-playcount {
  --border-radius: 10px 0 0 10px;
  background-color: #000;
  border-radius: 10px;
  color: #fff;
  display: flex;
  line-height: normal;
  margin-bottom: 2px;
}

.beatmap-playcount__title {
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  min-width: 0;
}

@media (min-width: 900px) {
  .beatmap-playcount__title-artist {
    display: inline;
    font-weight: 400;
    color: hsl(var(--hsl-f1));
}


/* --------------------- MODS ------------------------- */

.play-detail__mods{
  padding: 5px 0px;
}

.mod{
  --icon-width: 1.25em;
  height: 26px;
}

.mod__icon--DT::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-doubletime%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--DT::before {
  display: none !important;
}

.mod__icon--NC::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-nightcore%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--NC::before {
  display: none !important;
}

.mod__icon--HD::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-hidden%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--HD::before {
  display: none !important;
}

.mod__icon--HR::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-hardrock%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--HR::before {
  display: none !important;
}

.mod__icon--FL::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-flashlight%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--FL::before {
  display: none !important;
}

.mod__icon--SD::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-suddendeath%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--SD::before {
  display: none !important;
}

.mod__icon--PF::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-perfect%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--PF::before {
  display: none !important;
}

.mod__icon--HT::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-halftime%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--HT::before {
  display: none !important;
}

.mod__icon--NF::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-nofail%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--NF::before {
  display: none !important;
}

.mod__icon--EZ::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-easy%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--EZ::before {
  display: none !important;
}

.mod__icon--SO::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  background-color: transparent !important;
  background-image: url('https://raw.githubusercontent.com/Hkefp/osu-userscript/refs/heads/main/mods/selection-mod-spunout%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--SO::before {
  display: none !important;
}

  .mod--type-System {
    display:none
  }




/* --------------------- BEATMAP PAGE ------------------------- */


  .avatar--beatmapset {
    border-radius: 100px;
  }

  .beatmap-stats-table__label {
    font-weight: 400;
    padding: 2.5px 0;
    white-space: nowrap;
    width: max-content;
    text-overflow: clip;
    display: flex;
  }

  .avatar {
    border-radius: 100%;
  }


  .beatmapset-panel__info-row--extra {
    --gutter: 2px;
  }

  .beatmapset-panel__beatmap-icon {
    margin-right: 3px;
  }


/* ========================================================= Medals Section */

.badge-achievement--locked .badge-achievement__image {
  filter: saturate(0%);
  opacity: .15;
}
`);

/* ========================================================= Hide Classic Mod */

(function () {
    'use strict';

    const replacements = {
        'great': '300',
        'ok': '100',
        'meh': '50'
    };

    function replaceTextInElements(selector) {
        document.querySelectorAll(selector).forEach(el => {
            const text = el.textContent.trim().toLowerCase();
            if (replacements[text]) {
                el.textContent = replacements[text];
            }
        });
    }

    function removeClassicMod() {
        document.querySelectorAll('.mod__icon--CL').forEach(mod => mod.remove());
    }

    function processCurrentPage() {
        const url = window.location.href;

        if (url.includes('/scores/')) {
            replaceTextInElements('.score-stats__stat-row--label');
        }
        if (url.includes('/beatmapsets/')) {
            replaceTextInElements('.beatmap-score-top__stat-header');
            replaceTextInElements('.beatmap-scoreboard-table__header--hitstat');
        }
        if (url.includes('/community/matches/')) {
            replaceTextInElements('.score-stats__stat-row--label');
            replaceTextInElements('.mp-history-player-score__stat-label');
        }
        if (url.includes('/users/')) {
            removeClassicMod();
        }
    }

    processCurrentPage();
    setTimeout(processCurrentPage, 1500);

    const getTargetContainer = () => (
        document.querySelector('.js-react--score-page') ||
        document.querySelector('.js-react--beatmapset-page') ||
        document.querySelector('.js-react--match-page') ||
        document.querySelector('.js-react--user-page') ||
        document.querySelector('.user-profile') ||
        document.querySelector('.score-stats') ||
        document.querySelector('.beatmap-scoreboard') ||
        document.querySelector('.score-list') ||
        document.querySelector('.js-profile-page-top-scores') ||
        document.body
    );

    let targetContainer = getTargetContainer();
    const observer = new MutationObserver(() => {
        processCurrentPage();
        const newContainer = getTargetContainer();
        if (newContainer !== targetContainer) {
            targetContainer = newContainer;
            observer.observe(targetContainer, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
        }
    });

    observer.observe(targetContainer, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });

    function updateObserver() {
        const newContainer = getTargetContainer();
        if (newContainer !== targetContainer) {
            targetContainer = newContainer;
            observer.observe(targetContainer, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
        }
        processCurrentPage();
        setTimeout(processCurrentPage, 1000);
    }

    window.addEventListener('popstate', updateObserver);
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
        originalPushState.apply(this, args);
        updateObserver();
    };
    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
        originalReplaceState.apply(this, args);
        updateObserver();
    };
})();


