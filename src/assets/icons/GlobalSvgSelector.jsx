import React from 'react';

const GlobalSvgSelector = ({ id }) => {
  switch (id) {
    case 'logo':
      return (
        <svg
          width="120"
          height="31"
          viewBox="0 0 120 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_0_406)">
            <path
              d="M15.4931 28.2893C14.2149 29.4928 12.5767 30.2443 10.8296 30.4286C9.81132 30.561 8.78154 30.5812 7.75889 30.4886C5.71935 30.4174 3.74711 29.742 2.09306 28.5484C1.45133 28.1014 0.926391 27.5072 0.562188 26.8157C0.197985 26.1242 0.00519334 25.3555 0 24.5743C0.0157822 18.8057 -0.0138875 13.0371 0.0186633 7.26845C0.0434583 5.69384 0.611693 4.17601 1.62744 2.97129C2.91449 1.47866 4.69949 0.502099 6.6521 0.222393C7.94677 -0.0143474 9.26856 -0.0670663 10.578 0.0657962C12.5768 0.160046 14.4943 0.884124 16.0554 2.13411C17.242 3.09346 18.0114 4.4736 18.2028 5.9861C18.2925 6.65879 18.2393 7.32164 18.2896 8.02093H12.4837C12.4559 7.54778 12.3676 7.08009 12.2212 6.62923C12.1418 6.35451 11.9994 6.102 11.8055 5.8916C11.6115 5.68119 11.3713 5.51865 11.1037 5.41682C10.4941 5.13302 9.82802 4.99106 9.15551 5.00164C8.483 5.01222 7.8216 5.17506 7.22127 5.47789C6.82213 5.67929 6.48311 5.98195 6.23813 6.35553C5.99315 6.72911 5.8509 7.16044 5.82561 7.60626C5.61946 9.72874 5.75843 11.8581 5.73771 13.9836C5.71207 16.6221 5.72489 19.2617 5.73771 21.9002C5.68331 22.6984 5.86479 23.495 6.25956 24.1912C6.50894 24.5591 6.83887 24.8656 7.2244 25.0874C7.60993 25.3093 8.04096 25.4406 8.48484 25.4715C9.20043 25.5703 9.92925 25.5028 10.6145 25.2745C11.0834 25.1468 11.5024 24.8801 11.8162 24.5096C12.13 24.139 12.3239 23.6822 12.3722 23.1993C12.6149 21.525 12.3979 19.8398 12.4896 18.1152H10.1035V13.238H18.26V30.0513C17.7964 30.0513 17.3259 30.072 16.8573 30.0445C16.5358 30.0257 16.4766 29.6771 16.3079 29.4811C16.0136 29.0998 15.7416 28.7019 15.4931 28.2893Z"
              fill="#051655"
            />
            <path
              d="M44.0748 30.1413C42.7027 30.1413 41.3336 30.1797 39.9685 30.1235C39.6887 30.0869 39.4229 29.9793 39.1965 29.8111C38.9701 29.6428 38.7907 29.4194 38.6753 29.1623C38.2271 28.297 37.9435 27.3563 37.8389 26.3878C37.7511 25.8411 37.7037 25.2896 37.6337 24.7134H31.0505C30.8789 25.7358 30.7369 26.7414 30.5346 27.7351C30.4232 28.5147 30.0545 29.2349 29.4871 29.7818C29.2706 29.9937 28.9848 30.1203 28.6822 30.1383C27.469 30.16 26.2557 30.1472 25 30.1472C25.3423 28.4019 25.7033 26.7 26.0071 24.9803C26.3829 22.8588 26.7962 20.7452 27.2065 18.6316C27.6376 16.4136 28.0075 14.1838 28.4228 11.9618C28.7424 10.2569 29.1064 8.56092 29.424 6.85604C29.7525 5.0901 30.0158 3.31038 30.3719 1.55035C30.4138 1.11782 30.6224 0.718481 30.9537 0.436734C31.285 0.154986 31.7131 0.0128845 32.1474 0.0404618C33.6852 0.0512958 35.2239 0.0729637 36.7607 0.0404618C37.2652 -0.0223134 37.7741 0.11582 38.1773 0.424951C38.5805 0.734083 38.8455 1.18934 38.915 1.69216C39.2365 3.04542 39.4289 4.42824 39.6785 5.79825C39.8758 6.88854 40.0809 7.97786 40.2762 9.06815C40.511 10.381 40.7359 11.6949 40.9667 13.0078C41.1857 14.231 41.4155 15.4533 41.6374 16.6766C41.8774 18.0029 42.1152 19.3299 42.3506 20.6576C42.541 21.7193 42.7284 22.782 42.9227 23.8428C43.1594 25.1389 43.404 26.4341 43.6408 27.7302C43.7907 28.5191 43.9278 29.3159 44.0748 30.1413ZM34.4624 5.85833C34.4151 5.9125 34.351 5.95191 34.3431 6.00017C34.2445 6.60589 34.1458 7.21357 34.0471 7.82027C33.8785 8.82488 33.7029 9.82752 33.5313 10.8311C33.334 11.9822 33.1367 13.1335 32.9394 14.2852C32.7372 15.4671 32.5282 16.649 32.3319 17.8309C32.2165 18.5262 32.1089 19.2235 32.0221 19.9228C32.0074 19.9911 32.0086 20.0618 32.0255 20.1295C32.0425 20.1973 32.0748 20.2602 32.12 20.3135C32.1652 20.3668 32.222 20.409 32.2861 20.4369C32.3501 20.4648 32.4198 20.4776 32.4897 20.4744C33.8114 20.4928 35.1332 20.4928 36.455 20.4744C36.7992 20.4744 37.0172 20.2488 36.887 19.9002C36.8149 19.6561 36.766 19.4058 36.741 19.1526C36.3464 16.91 35.9933 14.6595 35.6106 12.4149C35.2427 10.2323 34.8501 8.05763 34.4624 5.85833Z"
              fill="#051655"
            />
            <path
              d="M61.8245 24.9709C62.1651 24.2791 62.3233 23.512 62.2841 22.7421C62.2713 17.4649 62.2772 12.1878 62.2772 6.91064C62.2977 6.57043 62.2454 6.22979 62.1239 5.91131C62.0023 5.59282 61.8143 5.3038 61.5723 5.06346C61.3303 4.82311 61.0398 4.63692 60.7202 4.51729C60.4006 4.39766 60.0591 4.34732 59.7185 4.36959C59.22 4.33742 58.7196 4.39037 58.2389 4.52619C57.8555 4.66302 57.5149 4.89844 57.2517 5.20866C56.9885 5.51889 56.8118 5.89296 56.7396 6.29312C56.652 6.70926 56.6215 7.13534 56.6489 7.55969C56.6489 12.7295 56.64 17.9012 56.6489 23.0691C56.6489 24.574 57.1776 25.5057 58.6651 25.8554C58.7274 25.8793 58.787 25.91 58.8426 25.947C58.4242 26.354 58.0524 26.8063 57.7339 27.2953L61.4556 30.0865C61.0612 30.1615 60.6614 30.2043 60.2601 30.2146C58.5941 30.3397 56.9202 30.1235 55.3409 29.5793C54.41 29.2641 53.5667 28.7341 52.8792 28.0325C52.1918 27.3309 51.6797 26.4774 51.3845 25.5412C51.1303 24.7683 51.0031 23.9594 51.0077 23.1459C51.0077 17.7289 50.9841 12.3119 51.0196 6.90082C50.9876 5.56637 51.3749 4.25542 52.1271 3.15195C52.8793 2.04848 53.9587 1.20786 55.2137 0.748081C56.9447 0.126189 58.7912 -0.109162 60.6231 0.0586332C61.948 0.116747 63.245 0.458001 64.4266 1.05932C65.2461 1.477 65.9642 2.0685 66.5308 2.79241C67.0973 3.51632 67.4985 4.35513 67.7063 5.25011C67.8446 5.80801 67.9109 6.38128 67.9036 6.95597C67.8967 12.5394 67.9194 18.1238 67.8849 23.7073C67.8868 25.0839 67.3972 26.4161 66.5039 27.4647C65.7759 26.9112 65.0806 26.3459 64.3477 25.8347C63.6077 25.3097 62.7314 25.0097 61.8245 24.9709Z"
              fill="#051655"
            />
            <path
              d="M67.7802 29.2815C67.4845 29.7635 67.0794 30.1693 66.5975 30.466C66.1156 30.7627 65.5706 30.9419 65.0065 30.9893C63.7642 31.0328 62.5547 30.5867 61.639 29.7474C60.6526 28.9594 59.6366 28.2257 58.6344 27.4663C58.4125 27.2979 58.3385 27.1708 58.5526 26.8754C58.829 26.4941 59.1844 26.1768 59.5946 25.9448C60.0047 25.7128 60.4601 25.5717 60.9297 25.531C61.5906 25.4673 62.2575 25.549 62.8834 25.7702C63.5093 25.9914 64.0791 26.3468 64.5527 26.8113C65.5046 27.6071 66.5255 28.3183 67.5188 29.0678C67.5908 29.1219 67.6609 29.183 67.7802 29.2815Z"
              fill="#EB3D35"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_406">
              <rect width="120" height="31" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'arrow':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.43 18.8201C14.24 18.8201 14.05 18.7501 13.9 18.6001C13.61 18.3101 13.61 17.8301 13.9 17.5401L19.44 12.0001L13.9 6.46012C13.61 6.17012 13.61 5.69012 13.9 5.40012C14.19 5.11012 14.67 5.11012 14.96 5.40012L21.03 11.4701C21.32 11.7601 21.32 12.2401 21.03 12.5301L14.96 18.6001C14.81 18.7501 14.62 18.8201 14.43 18.8201Z"
            fill="white"
          />
          <path
            d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
            fill="white"
          />
        </svg>
      );

    case 'location':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45ZM12 13.46C10.26 13.46 8.84997 12.05 8.84997 10.31C8.84997 8.57 10.26 7.16 12 7.16C13.74 7.16 15.15 8.57 15.15 10.31C15.15 12.05 13.74 13.46 12 13.46Z"
            fill="#B3B4BA"
          />
        </svg>
      );

    case 'crown':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z"
            fill="#B3B4BA"
          />
          <path
            d="M20.35 5.52004L16.35 8.38004C15.82 8.76004 15.06 8.53004 14.83 7.92004L12.94 2.88004C12.62 2.01004 11.39 2.01004 11.07 2.88004L9.16998 7.91004C8.93998 8.53004 8.18997 8.76004 7.65998 8.37004L3.65998 5.51004C2.85998 4.95004 1.79998 5.74004 2.12998 6.67004L6.28998 18.32C6.42998 18.72 6.80998 18.98 7.22998 18.98H16.76C17.18 18.98 17.56 18.71 17.7 18.32L21.86 6.67004C22.2 5.74004 21.14 4.95004 20.35 5.52004ZM14.5 14.75H9.49998C9.08998 14.75 8.74998 14.41 8.74998 14C8.74998 13.59 9.08998 13.25 9.49998 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z"
            fill="#B3B4BA"
          />
        </svg>
      );

    case 'frame':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
            fill="#B3B4BA"
          />
          <path
            d="M17.08 14.15C14.29 12.29 9.73996 12.29 6.92996 14.15C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z"
            fill="#B3B4BA"
          />
        </svg>
      );

    case 'heart':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z"
            fill="#B3B4BA"
          />
        </svg>
      );

    case 'user-tag':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.75C13.29 5.75 14.33 6.79 14.33 8.08C14.33 9.37 13.29 10.41 12 10.41C10.71 10.41 9.67 9.36 9.67 8.08C9.67 6.79 10.71 5.75 12 5.75ZM14.68 15.06H9.32C8.51 15.06 8.04 14.16 8.49 13.49C9.17 12.48 10.49 11.8 12 11.8C13.51 11.8 14.83 12.48 15.51 13.49C15.96 14.16 15.48 15.06 14.68 15.06Z"
            fill="#B3B4BA"
          />
        </svg>
      );

    case 'search':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.58329 18.125C4.87496 18.125 1.04163 14.2916 1.04163 9.58329C1.04163 4.87496 4.87496 1.04163 9.58329 1.04163C14.2916 1.04163 18.125 4.87496 18.125 9.58329C18.125 14.2916 14.2916 18.125 9.58329 18.125ZM9.58329 2.29163C5.55829 2.29163 2.29163 5.56663 2.29163 9.58329C2.29163 13.6 5.55829 16.875 9.58329 16.875C13.6083 16.875 16.875 13.6 16.875 9.58329C16.875 5.56663 13.6083 2.29163 9.58329 2.29163Z"
            fill="#747887"
          />
          <path
            d="M18.3333 18.9583C18.175 18.9583 18.0166 18.9 17.8916 18.775L16.225 17.1083C15.9833 16.8666 15.9833 16.4666 16.225 16.225C16.4666 15.9833 16.8666 15.9833 17.1083 16.225L18.775 17.8916C19.0166 18.1333 19.0166 18.5333 18.775 18.775C18.65 18.9 18.4916 18.9583 18.3333 18.9583Z"
            fill="#747887"
          />
        </svg>
      );

    case 'check-mark':
      return (
        <svg
          width="19"
          height="15"
          viewBox="0 0 19 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 6.73684L7.17241 12L17 2"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'linkedIn':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.78341 4.16668C5.78319 4.6087 5.60738 5.03254 5.29466 5.34494C4.98195 5.65735 4.55793 5.83273 4.11591 5.83251C3.67388 5.83229 3.25004 5.65648 2.93764 5.34377C2.62524 5.03105 2.44985 4.60704 2.45007 4.16501C2.45029 3.72298 2.6261 3.29915 2.93882 2.98674C3.25153 2.67434 3.67555 2.49896 4.11757 2.49918C4.5596 2.4994 4.98344 2.6752 5.29584 2.98792C5.60825 3.30064 5.78363 3.72465 5.78341 4.16668ZM5.83341 7.06668H2.50007V17.5H5.83341V7.06668ZM11.1001 7.06668H7.78341V17.5H11.0667V12.025C11.0667 8.97501 15.0417 8.69168 15.0417 12.025V17.5H18.3334V10.8917C18.3334 5.75001 12.4501 5.94168 11.0667 8.46668L11.1001 7.06668Z"
            fill="#747887"
          />
        </svg>
      );

    case 'twitter':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.4683 4.71333C17.8321 4.99474 17.1574 5.17956 16.4666 5.26167C17.1947 4.82619 17.7397 4.14085 17.9999 3.33333C17.3166 3.74 16.5674 4.025 15.7866 4.17917C15.2621 3.61798 14.5669 3.2458 13.809 3.12049C13.0512 2.99517 12.2732 3.12374 11.596 3.48621C10.9187 3.84868 10.3802 4.42474 10.0642 5.12483C9.74812 5.82492 9.67221 6.60982 9.84825 7.3575C8.46251 7.28805 7.10686 6.92794 5.86933 6.30055C4.63179 5.67317 3.54003 4.79254 2.66492 3.71583C2.35516 4.24788 2.19238 4.85269 2.19326 5.46833C2.19326 6.67667 2.80826 7.74417 3.74326 8.36917C3.18993 8.35175 2.64878 8.20232 2.16492 7.93333V7.97667C2.16509 8.78142 2.44356 9.56135 2.95313 10.1842C3.46269 10.8071 4.17199 11.2346 4.96075 11.3942C4.4471 11.5334 3.90851 11.5539 3.38576 11.4542C3.60814 12.1469 4.04159 12.7527 4.62541 13.1868C5.20924 13.6209 5.9142 13.8615 6.64159 13.875C5.91866 14.4428 5.0909 14.8625 4.20566 15.1101C3.32041 15.3578 2.39503 15.4285 1.48242 15.3183C3.0755 16.3429 4.93 16.8868 6.82409 16.885C13.2349 16.885 16.7408 11.5742 16.7408 6.96833C16.7408 6.81833 16.7366 6.66667 16.7299 6.51833C17.4123 6.02514 18.0013 5.41418 18.4691 4.71417L18.4683 4.71333Z"
            fill="#747887"
          />
        </svg>
      );

    case 'gallery':
      return (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.44988 47.525L6.39988 47.575C5.72488 46.1 5.29988 44.425 5.12488 42.575C5.29988 44.4 5.77488 46.05 6.44988 47.525Z"
            fill="#051655"
          />
          <path
            d="M22.5002 25.95C25.7863 25.95 28.4502 23.2861 28.4502 20C28.4502 16.7139 25.7863 14.05 22.5002 14.05C19.2141 14.05 16.5502 16.7139 16.5502 20C16.5502 23.2861 19.2141 25.95 22.5002 25.95Z"
            fill="#051655"
          />
          <path
            d="M40.4751 5H19.5251C10.4251 5 5.00012 10.425 5.00012 19.525V40.475C5.00012 43.2 5.47512 45.575 6.40012 47.575C8.55012 52.325 13.1501 55 19.5251 55H40.4751C49.5751 55 55.0001 49.575 55.0001 40.475V34.75V19.525C55.0001 10.425 49.5751 5 40.4751 5ZM50.9251 31.25C48.9751 29.575 45.8251 29.575 43.8751 31.25L33.4751 40.175C31.5251 41.85 28.3751 41.85 26.4251 40.175L25.5751 39.475C23.8001 37.925 20.9751 37.775 18.9751 39.125L9.62512 45.4C9.07512 44 8.75012 42.375 8.75012 40.475V19.525C8.75012 12.475 12.4751 8.75 19.5251 8.75H40.4751C47.5251 8.75 51.2501 12.475 51.2501 19.525V31.525L50.9251 31.25Z"
            fill="#051655"
          />
        </svg>
      );

    case 'user':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 10.6251C7.35837 10.6251 5.20837 8.47508 5.20837 5.83341C5.20837 3.19175 7.35837 1.04175 10 1.04175C12.6417 1.04175 14.7917 3.19175 14.7917 5.83341C14.7917 8.47508 12.6417 10.6251 10 10.6251ZM10 2.29175C8.05004 2.29175 6.45837 3.88341 6.45837 5.83341C6.45837 7.78341 8.05004 9.37508 10 9.37508C11.95 9.37508 13.5417 7.78341 13.5417 5.83341C13.5417 3.88341 11.95 2.29175 10 2.29175Z"
            fill="#747887"
          />
          <path
            d="M17.1585 18.9583C16.8168 18.9583 16.5335 18.675 16.5335 18.3333C16.5335 15.4583 13.6001 13.125 10.0001 13.125C6.40013 13.125 3.4668 15.4583 3.4668 18.3333C3.4668 18.675 3.18346 18.9583 2.8418 18.9583C2.50013 18.9583 2.2168 18.675 2.2168 18.3333C2.2168 14.775 5.70846 11.875 10.0001 11.875C14.2918 11.875 17.7835 14.775 17.7835 18.3333C17.7835 18.675 17.5001 18.9583 17.1585 18.9583Z"
            fill="#747887"
          />
        </svg>
      );

    case 'google':
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.064 7.6765C3.89601 6.00389 5.17237 4.59783 6.75043 3.61547C8.32849 2.63312 10.1461 2.11318 12 2.11377C14.695 2.11377 16.959 3.11324 18.69 4.7437L15.823 7.63915C14.786 6.63866 13.468 6.12883 12 6.12883C9.395 6.12883 7.19 7.90568 6.405 10.2913C6.205 10.897 6.091 11.5432 6.091 12.2095C6.091 12.8758 6.205 13.5219 6.405 14.1277C7.191 16.5143 9.395 18.2901 12 18.2901C13.345 18.2901 14.49 17.9317 15.386 17.326C15.9054 16.9807 16.3501 16.5327 16.6932 16.009C17.0363 15.4853 17.2706 14.8968 17.382 14.2791H12V10.3741H21.418C21.536 11.0343 21.6 11.7229 21.6 12.4386C21.6 15.5138 20.51 18.1023 18.618 19.859C16.964 21.4016 14.7 22.3052 12 22.3052C10.6866 22.3057 9.38604 22.0449 8.17255 21.5378C6.95905 21.0306 5.85645 20.287 4.92776 19.3494C3.99907 18.4118 3.2625 17.2987 2.76013 16.0736C2.25777 14.8485 1.99948 13.5354 2 12.2095C2 10.58 2.386 9.03942 3.064 7.6765Z"
            fill="white"
          />
        </svg>
      );

    default:
      return null;
  }
};

export default GlobalSvgSelector;
