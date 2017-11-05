import * as React from 'react';
import classnames from 'classnames';

import './styles.css';

export default function LinkDetailForkChoice({
  label,
  icon,
  active,
  onClick,
}) {
  return <div
    className={classnames('link-detail-fork-choice', {active})}
    onClick={onClick}
    aria-labelledby="label"
  >
    <span className="link-detail-fork-choice-icon">{icon}</span>
    <span id="label" className="link-detail-fork-choice-label">{label}</span>
  </div>;
}

// Icons to insert into the `icon` prop of the above component.
export const ALL_FORKS_ICON = <svg width="80px" height="56px" viewBox="0 0 100 71" version="1.1">
  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Edit-Detail" transform="translate(-112.000000, -1202.000000)" stroke="#979797">
          <g id="Group-5" transform="translate(113.000000, 1203.000000)">
              <path d="M10.4776274,57.6367355 L49.2528631,15.2546584" id="Path-6"></path>
              <path d="M49,60.7546599 L49,15.2546584" id="Path-6-Copy-2"></path>
              <path d="M87.1354415,57.6367355 L48.3602057,15.2546584 L87.1354415,57.6367355 Z" id="Path-6-Copy"></path>
              <ellipse id="Oval-4" fill="#EFEFEF" cx="49.5" cy="17" rx="17.5" ry="17"></ellipse>
              <ellipse id="Oval-4-Copy" fill="#EFEFEF" cx="11.5" cy="58" rx="11.5" ry="11"></ellipse>
              <ellipse id="Oval-4-Copy-2" fill="#EFEFEF" cx="49.5" cy="58" rx="11.5" ry="11"></ellipse>
              <ellipse id="Oval-4-Copy-3" fill="#EFEFEF" cx="86.5" cy="58" rx="11.5" ry="11"></ellipse>
          </g>
      </g>
  </g>
</svg>;

export const ONE_FORK_ICON = <svg width="80px" height="56px" viewBox="0 0 100 71" version="1.1">
  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Edit-Detail" transform="translate(-278.000000, -1202.000000)" stroke="#979797">
          <g id="Group-6" transform="translate(279.000000, 1203.000000)">
              <path d="M10.984774,57.6367355 L49.7600098,15.2546584" id="Path-6-Copy-5"></path>
              <ellipse id="Oval-4-Copy-6" fill="#EFEFEF" cx="11.5" cy="58" rx="11.5" ry="11"></ellipse>
              <g id="Group-4" opacity="0.5" transform="translate(38.000000, 15.000000)">
                  <path d="M11,45.4477267 L11,0" id="Path-6-Copy-4"></path>
                  <path d="M10.4347826,42.3333845 L48.7071681,0" id="Path-6-Copy-3" transform="translate(29.570975, 21.166692) scale(-1, 1) translate(-29.570975, -21.166692) "></path>
                  <ellipse id="Oval-4-Copy-5" fill="#FFFFFF" cx="11.3043478" cy="43.03125" rx="11.3043478" ry="10.96875"></ellipse>
                  <ellipse id="Oval-4-Copy-4" fill="#FFFFFF" cx="48.6956522" cy="43.03125" rx="11.3043478" ry="10.96875"></ellipse>
              </g>
              <ellipse id="Oval-4-Copy-7" fill="#EFEFEF" cx="49.5" cy="17" rx="17.5" ry="17"></ellipse>
          </g>
      </g>
  </g>
</svg>;

export const UNRELATED_ICON = <svg width="80px" height="56px" viewBox="0 0 100 71" version="1.1">
  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Edit-Detail" transform="translate(-448.000000, -1202.000000)">
          <g id="Group-8" transform="translate(449.000000, 1203.000000)">
              <path d="M72.969308,17.1589007 L17.8350566,17.1589007 L72.969308,17.1589007 Z" id="Path-6-Copy-6" stroke="#D7253B" strokeDasharray="4,5"></path>
              <ellipse id="Oval-4-Copy-12" stroke="#979797" fill="#EFEFEF" cx="72.5" cy="17" rx="17.5" ry="17"></ellipse>
              <g id="Group-7" opacity="0.5" transform="translate(6.000000, 15.000000)" stroke="#979797">
                  <path d="M11.5,45.7546599 L11.5,0.254658385" id="Path-6-Copy-7"></path>
                  <path d="M10.4919207,42.6367355 L49.2671564,0.254658385" id="Path-6-Copy-9" transform="translate(29.879539, 21.445697) scale(-1, 1) translate(-29.879539, -21.445697) "></path>
                  <ellipse id="Oval-4-Copy-13" fill="#FFFFFF" transform="translate(48.500000, 43.000000) scale(-1, 1) translate(-48.500000, -43.000000) " cx="48.5" cy="43" rx="11.5" ry="11"></ellipse>
                  <ellipse id="Oval-4-Copy-9" fill="#FFFFFF" cx="11.5" cy="43" rx="11.5" ry="11"></ellipse>
              </g>
              <path d="M69,11.5252918 C69.2351936,11.3177681 69.492865,11.1206235 69.773022,10.9338521 C70.0531791,10.7470808 70.3558133,10.584523 70.6809339,10.4461738 C71.0060544,10.3078246 71.3588394,10.1988763 71.7392996,10.1193256 C72.1197598,10.0397748 72.5313424,10 72.9740597,10 C73.5758785,10 74.1240788,10.0830082 74.618677,10.2490272 C75.1132753,10.4150462 75.5369632,10.6519656 75.8897536,10.9597925 C76.2425439,11.2676194 76.5157794,11.6394271 76.7094682,12.075227 C76.903157,12.5110268 77,12.9987003 77,13.538262 C77,14.0639888 76.9239091,14.5188048 76.771725,14.9027237 C76.619541,15.2866426 76.4275844,15.620405 76.1958495,15.9040208 C75.9641147,16.1876365 75.7133606,16.4332026 75.4435798,16.6407263 C75.1737989,16.8482501 74.9178568,17.0436653 74.6757458,17.226978 C74.4336348,17.4102906 74.2243848,17.5901418 74.0479896,17.766537 C73.8715944,17.9429321 73.7661048,18.1418061 73.7315175,18.3631647 L73.4928664,19.8780804 L71.7392996,19.8780804 L71.5629053,18.1867704 C71.5559879,18.1521831 71.5525292,18.1227844 71.5525292,18.0985733 L71.5525292,18.0103761 C71.5525292,17.706008 71.6286201,17.4414192 71.7808042,17.2166018 C71.9329882,16.9917844 72.1232155,16.7808051 72.3514916,16.5836576 C72.5797677,16.38651 72.8253337,16.1945535 73.0881971,16.0077821 C73.3510605,15.8210107 73.5966266,15.6186781 73.8249027,15.4007782 C74.0531788,15.1828783 74.2434061,14.9355829 74.3955901,14.6588846 C74.5477742,14.3821863 74.6238651,14.0570706 74.6238651,13.6835279 C74.6238651,13.4344994 74.577173,13.2114147 74.4837873,13.0142672 C74.3904016,12.8171196 74.2607012,12.6476445 74.0946822,12.5058366 C73.9286632,12.3640287 73.7297893,12.2550804 73.4980545,12.1789883 C73.2663196,12.1028963 73.0155656,12.0648508 72.7457847,12.0648508 C72.3514896,12.0648508 72.0177273,12.1080843 71.7444877,12.1945525 C71.4712481,12.2810208 71.2395167,12.3778637 71.0492866,12.4850843 C70.8590565,12.5923049 70.6982281,12.6891479 70.5667964,12.7756161 C70.4353647,12.8620843 70.3177696,12.9053178 70.2140078,12.9053178 C69.9649793,12.9053178 69.7851281,12.8015575 69.6744488,12.5940337 L69,11.5252918 Z M70.9610895,23.7587549 C70.9610895,23.5443137 71.0008643,23.3402517 71.080415,23.1465629 C71.1599658,22.9528741 71.2706435,22.7868576 71.4124514,22.6485084 C71.5542592,22.5101593 71.7220051,22.3994816 71.9156939,22.3164721 C72.1093827,22.2334626 72.3169033,22.1919585 72.538262,22.1919585 C72.7527032,22.1919585 72.9567651,22.2334626 73.150454,22.3164721 C73.3441428,22.3994816 73.5101593,22.5101593 73.6485084,22.6485084 C73.7868576,22.7868576 73.8975353,22.9528741 73.9805447,23.1465629 C74.0635542,23.3402517 74.1050584,23.5443137 74.1050584,23.7587549 C74.1050584,23.9801135 74.0635542,24.1859048 73.9805447,24.3761349 C73.8975353,24.566365 73.7868576,24.7306521 73.6485084,24.8690013 C73.5101593,25.0073505 73.3441428,25.1162988 73.150454,25.1958495 C72.9567651,25.2754003 72.7527032,25.3151751 72.538262,25.3151751 C72.3169033,25.3151751 72.1093827,25.2754003 71.9156939,25.1958495 C71.7220051,25.1162988 71.5542592,25.0073505 71.4124514,24.8690013 C71.2706435,24.7306521 71.1599658,24.566365 71.080415,24.3761349 C71.0008643,24.1859048 70.9610895,23.9801135 70.9610895,23.7587549 Z" id="?" fill="#8E8E8E"></path>
              <ellipse id="Oval-4-Copy-11" stroke="#979797" fill="#EFEFEF" cx="17.5" cy="17" rx="17.5" ry="17"></ellipse>
          </g>
      </g>
  </g>
</svg>;
