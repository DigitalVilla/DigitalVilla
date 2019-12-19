import React from 'react';

const icons = {
  github: ["M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"],
	plane: ["M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"],
  linkedin: ["M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"],
  codepen: ['M945.75 368.042l-448-298.666c-10.748-7.166-24.752-7.166-35.5 0l-448 298.666c-8.902 5.934-14.25 15.926-14.25 26.624v298.666c0 10.7 5.348 20.692 14.25 26.624l448 298.666c5.374 3.584 11.562 5.376 17.75 5.376s12.376-1.792 17.75-5.376l448-298.666c8.902-5.934 14.25-15.926 14.25-26.624v-298.666c0-10.698-5.348-20.69-14.25-26.624zM480 654.876l-166.312-110.876 166.312-110.874 166.312 110.874-166.312 110.876zM512 377.542v-221.75l358.31 238.876-166.31 110.874-192-128zM448 377.542l-192 128-166.312-110.874 358.312-238.876v221.75zM198.312 544l-134.312 89.542v-179.082l134.312 89.54zM256 582.458l192 128v221.748l-358.312-238.872 166.312-110.876zM512 710.458l192-128 166.312 110.876-358.312 238.874v-221.75zM761.688 544l134.312-89.54v179.084l-134.312-89.544z'],
  mouse: ['M496 512c-70.688 0-128-57.312-128-128h-192v320c0 176.704 143.264 320 320 320s320-143.296 320-320v-320h-192c0 70.688-57.312 128-128 128zM368 256c0-70.688 57.312-128 128-128s128 57.312 128 128v64h192c0-176.736-143.264-320-320-320s-320 143.264-320 320h192v-64zM464 224v192c0 17.664 14.336 32 32 32s32-14.336 32-32v-192c0-17.664-14.336-32-32-32s-32 14.336-32 32z','M317.256 354.744l-90.512 90.512 285.256 285.254 285.254-285.256-90.508-90.508-194.746 194.744z'],
  chevronCircleDn: ['M1024 512c0-282.77-229.23-512-512-512s-512 229.23-512 512 229.23 512 512 512 512-229.23 512-512zM96 512c0-229.75 186.25-416 416-416s416 186.25 416 416-186.25 416-416 416-416-186.25-416-416z','M317.256 354.744l-90.512 90.512 285.256 285.254 285.254-285.256-90.508-90.508-194.746 194.744z'],
resume:["M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"],
}

const Icon = (props) => {
  return (
    <button
      className={"icon_BTN " + props.className}
      style={props.style || null}
      onClick={props.action || null}>
      <svg
        width='100%'
        height='100%'
        viewBox="0 0 1024 1024">
        {
          icons[props.icon] &&
          icons[props.icon].map((ico, i) => {
            return <path key={i} d={ico}></path>
          })
        }
      </svg>
      {props.value || ''}
    </button>
  )
}
export default Icon;


export const SVG = (props) => {
  return (
    <svg
      className={props.className}
      width='100%'
      height='100%'
      viewBox="0 0 1024 1024">
      {
        icons[props.icon].map((ico, i) => {
          return <path key={i} d={ico}></path>
        })
      }
    </svg>
  )
}