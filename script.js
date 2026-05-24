// ==UserScript==
// @name         Hkefp's Osu! Layout
// @namespace    https://osu.ppy.sh/*
// @version      1.2
// @description  Made by Hkefp
// @author       Hkefp
// @match        https://osu.ppy.sh/users/*/*
// @match        https://osu.ppy.sh/users/*
// @match        https://osu.ppy.sh/beatmapsets/*
// @match        https://osu.ppy.sh/beatmapsets/*/*
// @match        https://osu.ppy.sh/beatmapsets
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
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
    font-weight: 300 !important;
    font-size: 30px !important;
    font-family: Torus, Inter, "Helvetica Neue", Tahoma, Arial, sans-serif !important;
    --colour: white !important;
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

  .score-rank--XH{
    background-image: url(https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/ranks/ranking-XH-small%402X.png);
  }

  .score-rank--X{
    background-image: url(https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/ranks/ranking-X-small%402X.png);
  }

  .score-rank--SH{
    background-image: url(https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/ranks/ranking-SH-small%402X.png);
  }

  .score-rank--S{
    background-image: url(https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/ranks/ranking-S-small%402X.png);
  }

  .score-rank--A{
    background-image: url(https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/ranks/ranking-A-small%402X.png);
  }

  .score-rank--B{
    background-image: url(https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/ranks/ranking-B-small%402X.png);
  }

  .score-rank--C{
    background-image: url(https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/ranks/ranking-C-small%402X.png);
  }

  .score-rank--D{
    background-image: url(https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/ranks/ranking-D-small%402X.png);
  }

 .profile-rank-count {
    font-size: 14px;
    font-weight: normal;
    gap: 0;
}

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

.score-rank--tiny{
  display: table-header-group;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-doubletime%402x.png') !important;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-nightcore%402x.png') !important;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-hidden%402x.png') !important;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-hardrock%402x.png') !important;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-flashlight%402x.png') !important;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-suddendeath%402x.png') !important;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-perfect%402x.png') !important;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-halftime%402x.png') !important;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-nofail%402x.png') !important;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-easy%402x.png') !important;
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
  background-image: url('https://raw.githubusercontent.com/Hkefp/hkefp-s-osu-userscript-/refs/heads/main/mods/selection-mod-spunout%402x.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.mod__icon--SO::before {
  display: none !important;
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

`);


