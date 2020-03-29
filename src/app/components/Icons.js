import React from 'react';

const icons = {
	github: ["M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"],
	plane: ["M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"],
	linkedin: ["M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"],
	codepen: ['M945.75 368.042l-448-298.666c-10.748-7.166-24.752-7.166-35.5 0l-448 298.666c-8.902 5.934-14.25 15.926-14.25 26.624v298.666c0 10.7 5.348 20.692 14.25 26.624l448 298.666c5.374 3.584 11.562 5.376 17.75 5.376s12.376-1.792 17.75-5.376l448-298.666c8.902-5.934 14.25-15.926 14.25-26.624v-298.666c0-10.698-5.348-20.69-14.25-26.624zM480 654.876l-166.312-110.876 166.312-110.874 166.312 110.874-166.312 110.876zM512 377.542v-221.75l358.31 238.876-166.31 110.874-192-128zM448 377.542l-192 128-166.312-110.874 358.312-238.876v221.75zM198.312 544l-134.312 89.542v-179.082l134.312 89.54zM256 582.458l192 128v221.748l-358.312-238.872 166.312-110.876zM512 710.458l192-128 166.312 110.876-358.312 238.874v-221.75zM761.688 544l134.312-89.54v179.084l-134.312-89.544z'],
	mouse: ['M496 512c-70.688 0-128-57.312-128-128h-192v320c0 176.704 143.264 320 320 320s320-143.296 320-320v-320h-192c0 70.688-57.312 128-128 128zM368 256c0-70.688 57.312-128 128-128s128 57.312 128 128v64h192c0-176.736-143.264-320-320-320s-320 143.264-320 320h192v-64zM464 224v192c0 17.664 14.336 32 32 32s32-14.336 32-32v-192c0-17.664-14.336-32-32-32s-32 14.336-32 32z', 'M317.256 354.744l-90.512 90.512 285.256 285.254 285.254-285.256-90.508-90.508-194.746 194.744z'],
	chevronCircleDn: ['M1024 512c0-282.77-229.23-512-512-512s-512 229.23-512 512 229.23 512 512 512 512-229.23 512-512zM96 512c0-229.75 186.25-416 416-416s416 186.25 416 416-186.25 416-416 416-416-186.25-416-416z', 'M317.256 354.744l-90.512 90.512 285.256 285.254 285.254-285.256-90.508-90.508-194.746 194.744z'],
	resume: ["M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"],
	planeSolid: ["M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"],
	logOut: ["M365.714 822.857c0 16 7.429 54.857-18.286 54.857h-182.857c-90.857 0-164.571-73.714-164.571-164.571v-402.286c0-90.857 73.714-164.571 164.571-164.571h182.857c9.714 0 18.286 8.571 18.286 18.286 0 16 7.429 54.857-18.286 54.857h-182.857c-50.286 0-91.429 41.143-91.429 91.429v402.286c0 50.286 41.143 91.429 91.429 91.429h164.571c14.286 0 36.571-2.857 36.571 18.286zM896 512c0 9.714-4 18.857-10.857 25.714l-310.857 310.857c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-164.571h-256c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h256v-164.571c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l310.857 310.857c6.857 6.857 10.857 16 10.857 25.714z", "M365.714 822.857c0 16 7.429 54.857-18.286 54.857h-182.857c-90.857 0-164.571-73.714-164.571-164.571v-402.286c0-90.857 73.714-164.571 164.571-164.571h182.857c9.714 0 18.286 8.571 18.286 18.286 0 16 7.429 54.857-18.286 54.857h-182.857c-50.286 0-91.429 41.143-91.429 91.429v402.286c0 50.286 41.143 91.429 91.429 91.429h164.571c14.286 0 36.571-2.857 36.571 18.286zM896 512c0 9.714-4 18.857-10.857 25.714l-310.857 310.857c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-164.571h-256c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h256v-164.571c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l310.857 310.857c6.857 6.857 10.857 16 10.857 25.714z"],
	offline:["M5.09 154.87c-6.66 6.16-6.79 16.59-.35 22.97l34.24 33.96c6.14 6.09 16.02 6.23 22.4.38 6.99-6.4 14.31-12.22 21.65-18.01l-64.96-50.21c-4.3 3.71-8.79 7.04-12.98 10.91zm471.75 181.9l45.42-45.21c6.52-6.46 6.29-17.06-.57-23.17-64.94-57.74-148.91-82.66-230.34-74.98l-83.16-64.27c125.94-38.36 267.75-11.01 370.43 83.05 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.96c6.44-6.39 6.3-16.82-.35-22.97C496.46 26.82 298.08-.76 133.42 71.35L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.03-2.81-22.45L476.84 336.77zm-358.53-68.38c-6.86 6.1-7.08 16.7-.57 23.17l34.28 34.01c5.97 5.93 15.59 6.32 21.94.8 13.35-11.6 28.01-20.66 43.15-28.55l-68.36-52.83c-10.48 7.15-20.74 14.78-30.44 23.4zM256 416c0 35.35 28.65 64 64 64 31.91 0 58.15-23.42 62.99-53.98l-88.7-68.56C271.77 367.37 256 389.82 256 416z"]
}
const loaderSVG = "M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"

const Icon = (props) => {
	const gradId = `${props.className}-Icon-gradient`;

	return (
		<button
			className={`icon_BTN ${props.className || ''}`}
			aria-label={props.label || props.value}
			style={props.style || null}
			type={props.type || null}
			onClick={props.action || null}>
			<svg
				xmlns="http://www.w3.org/2000/svg" 
				width='100%'
				height='100%'
				viewBox="0 0 1024 1024"
			>
				{ props.gradient &&
					<defs>
						<linearGradient id={gradId} x2="1" y2="2">
							<stop offset="0%" stopColor="var(--brand2)" />
							<stop offset="60%" stopColor="var(--brand4)" />
							<stop offset="100%" stopColor="var(--brand4)" />
						</linearGradient>
					</defs>
				}
				{ icons[props.icon] &&
					icons[props.icon].map((ico, i) =>
						<path
							width='100%'
							height='100%'
							key={`menu-btn-${i}`} d={ico}
							{...props.gradient ? { fill: `url(#${gradId})` } : {}}
						>
						</path>
					)
				}
			</svg>
			{props.value || ''}
		</button>
	)
}
export default Icon;

export const SVG = (props) => {
	const gradId = `${props.className || 'SVG'}-gradient`;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg" 
			className={props.className || ''}
			width='100%'
			height='100%'
			viewBox="0 0 1024 1024">

			{props.gradient &&
				<defs>
					<linearGradient id={gradId} x2="1" y2="1">
						<stop offset="0%" stopColor="var(--brand2)" />
						<stop offset="60%" stopColor="var(--brand3)" />
						<stop offset="100%" stopColor="var(--brand4)" />
					</linearGradient>
				</defs>
			}{
				icons[props.icon].map((ico, i) => {
					return <path key={props.className + i}
						{...props.gradient ? { fill: `url(#${gradId})` } : {}}
						d={ico}
					>
					</path>
				})
			}
		</svg>
	)
}

export const Loader = (props) => {
	const gradId = `${props.className || 'Loader'}-gradient`;

	return (
		<div className={`loading noSelect ${props.className}`}>
			<div className="loading__ring">
				<svg xmlns="http://www.w3.org/2000/svg"
					x="0px" y="0px"
					viewBox="0 0 100 100"
				>
					{ props.gradient &&
						<defs>
							<linearGradient id={gradId} x2="1" y2="1">
								<stop offset="0%" stopColor="var(--brand2)" />
								<stop offset="60%" stopColor="var(--brand3)" />
								<stop offset="100%" stopColor="var(--brand4)" />
							</linearGradient>
						</defs>
					}
					<path 
						{...props.gradient ? { fill: `url(#${gradId})` } : {}}
						d={loaderSVG}
					>
					</path>
				</svg>
			</div>
			<div className="loading__ring">
				<svg xmlns="http://www.w3.org/2000/svg"
				x="0px" y="0px"
				viewBox="0 0 100 100"
				>
					{ props.gradient &&
						<defs>
							<linearGradient id={gradId+'-2'} x2="1" y2="1">
								<stop offset="0%" stopColor="var(--brand4)" />
								<stop offset="60%" stopColor="var(--brand3)" />
								<stop offset="100%" stopColor="var(--brand2)" />
							</linearGradient>
						</defs>
					}
					<path 
						{...props.gradient ? { fill: `url(#${gradId}-2)` } : {}}
						d={loaderSVG}
					>
					</path>
				</svg>
			</div>
		</div>
	)
}