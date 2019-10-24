import React from 'react'

const icons = {
	blocked: ["M874.016 874.016c-199.936 199.968-524.128 199.968-724.064 0-199.968-199.936-199.968-524.128 0-724.064 199.936-199.968 524.128-199.968 724.064 0 199.968 199.968 199.968 524.128 0 724.064zM240.48 783.52c134.496 134.496 343.776 147.968 493.728 41.184l-534.912-534.912c-106.784 149.952-93.312 359.2 41.184 493.728zM783.52 240.48c-134.496-134.496-343.776-147.968-493.696-41.184l534.912 534.88c106.752-149.92 93.28-359.2-41.216-493.696z"],
	hide: ["M655.872 223.232l-90.624 91.136c-15.919-4.443-34.2-6.998-53.078-6.998-113.108 0-204.8 91.692-204.8 204.8 0 18.877 2.554 37.158 7.335 54.516l-0.338-1.438-141.312 140.8c-67.584-51.2-123.904-117.76-162.816-194.048 95.239-183.856 284.061-307.329 501.722-307.329 50.98 0 100.377 6.773 147.342 19.469l-3.943-0.908zM850.432 317.952c68.096 51.2 124.416 117.76 163.84 194.048-95.198 183.988-284.089 307.568-501.843 307.568-51.308 0-101.013-6.861-148.249-19.715l3.948 0.915 90.624-91.136c15.919 4.443 34.2 6.998 53.078 6.998 113.108 0 204.8-91.692 204.8-204.8 0-18.877-2.554-37.158-7.335-54.516l0.338 1.438 141.312-140.8zM837.632 113.664l72.704 72.704-723.968 723.968-72.704-72.704 723.968-723.968z"],
	dots: ["M512.051 399.36c-62.208 0-112.691 50.432-112.691 112.64s50.483 112.64 112.691 112.64c62.208 0 112.589-50.432 112.589-112.64s-50.381-112.64-112.589-112.64zM153.651 399.36c-62.208 0-112.691 50.432-112.691 112.64s50.483 112.64 112.691 112.64c62.208 0 112.589-50.483 112.589-112.64s-50.381-112.64-112.589-112.64zM870.451 399.36c-62.208 0-112.691 50.432-112.691 112.64s50.483 112.64 112.691 112.64c62.208 0 112.589-50.432 112.589-112.64s-50.381-112.64-112.589-112.64z"],
	global: ["M1.088 533.376c11.328 272.352 235.808 490.624 510.912 490.624s499.584-218.272 510.912-490.624c0.608-1.696 1.088-3.456 1.088-5.376 0-1.152-0.416-2.144-0.64-3.2 0.096-4.288 0.64-8.48 0.64-12.8 0-282.304-229.696-512-512-512s-512 229.696-512 512c0 4.32 0.544 8.512 0.64 12.8-0.224 1.056-0.64 2.048-0.64 3.2 0 1.92 0.48 3.68 1.088 5.376zM797.472 727.744c-42.208-17.664-87.52-31.328-134.88-40.672 5.056-46.496 8.032-94.784 8.96-143.040h159.36c-2.912 65.728-14.592 127.776-33.44 183.712zM862.88 544h127.488c-5.952 89.792-36.416 172.896-85.216 242.528-24.288-17.056-50.464-32.608-78.624-46.080 20.64-59.808 33.344-126.176 36.352-196.448zM396.448 713.152c37.696-5.888 76.384-9.152 115.552-9.152s77.856 3.264 115.52 9.152c-22.208 170.72-70.72 278.848-115.52 278.848s-93.312-108.128-115.552-278.848zM445.056 981.248c-88.032-28.224-162.496-111.072-207.424-223.488 39.872-16.8 82.752-29.92 127.68-38.944 14.688 111.872 41.536 209.344 79.744 262.432zM392.768 342.688c38.944 6.016 78.88 9.312 119.232 9.312s80.288-3.296 119.232-9.312c5.504 51.84 8.768 108.416 8.768 169.312h-256c0-60.896 3.264-117.472 8.768-169.312zM639.52 544c-0.896 48.8-3.776 94.752-8.32 137.312-38.912-6.016-78.816-9.312-119.2-9.312s-80.288 3.296-119.232 9.312c-5.536-52.032-7.584-97.824-8.32-137.312h255.072zM658.72 718.816c44.928 9.024 87.776 22.144 127.68 38.944-44.928 112.416-119.392 195.264-207.424 223.488 38.176-53.088 65.024-150.56 79.744-262.432zM672 512c0-58.752-3.264-118.272-9.408-175.040 47.36-9.344 92.672-23.040 134.88-40.672 21.888 64.928 34.528 138.080 34.528 215.712h-160zM658.72 305.184c-14.72-111.872-41.536-209.376-79.776-262.432 88.032 28.224 162.496 111.072 207.424 223.488-39.872 16.8-82.72 29.952-127.648 38.944zM627.552 310.848c-37.696 5.888-76.384 9.152-115.552 9.152s-77.856-3.264-115.552-9.152c22.24-170.72 70.752-278.848 115.552-278.848s93.312 108.128 115.552 278.848zM365.28 305.184c-44.928-9.024-87.776-22.144-127.68-38.944 44.928-112.416 119.392-195.264 207.424-223.488-38.176 53.088-65.024 150.56-79.744 262.432zM361.408 336.96c-6.144 56.768-9.408 116.288-9.408 175.040h-160c0-77.632 12.64-150.784 34.528-215.744 42.208 17.664 87.52 31.328 134.88 40.704zM352.448 544c0.928 48.256 3.904 96.544 8.96 143.072-47.36 9.344-92.672 23.040-134.88 40.672-18.848-55.936-30.528-117.984-33.44-183.744h159.36zM197.44 740.448c-28.16 13.504-54.304 29.024-78.592 46.080-48.8-69.632-79.264-152.704-85.216-242.528h127.488c3.008 70.272 15.712 136.64 36.32 196.448zM138.016 812.16c21.92-15.328 45.344-29.504 70.624-41.76 32.128 79.52 78.368 145.536 133.952 190.176-80.832-30.656-151.328-82.176-204.576-148.416zM681.408 960.544c55.616-44.608 101.824-110.656 133.952-190.176 25.28 12.288 48.704 26.432 70.624 41.76-53.248 66.272-123.744 117.792-204.576 148.416zM864 512c0-82.144-13.696-159.584-37.44-228.448 28.16-13.504 54.336-29.024 78.624-46.080 54.528 77.888 86.816 172.448 86.816 274.528h-128zM886.016 211.84c-21.92 15.328-45.344 29.472-70.624 41.76-32.128-79.52-78.368-145.568-133.952-190.176 80.8 30.656 151.296 82.176 204.576 148.416zM342.592 63.456c-55.616 44.608-101.824 110.656-133.952 190.176-25.312-12.288-48.704-26.464-70.624-41.792 53.248-66.24 123.744-117.76 204.576-148.384zM118.848 237.472c24.256 17.056 50.432 32.576 78.592 46.080-23.744 68.864-37.44 146.304-37.44 228.448h-128c0-102.080 32.288-196.64 86.848-274.528z"],
	comment: ["M512 219.429c-237.714 0-438.857 133.714-438.857 292.571 0 85.143 57.143 166.286 156 222.286l49.714 28.571-15.429 54.857c-10.857 40.571-25.143 72-40 98.286 57.714-24 110.286-56.571 157.143-97.714l24.571-21.714 32.571 3.429c24.571 2.857 49.714 4.571 74.286 4.571 237.714 0 438.857-133.714 438.857-292.571s-201.143-292.571-438.857-292.571zM1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571h-2.857c-11.429 0-21.714-9.143-24.571-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-202.286 229.143-365.714 512-365.714v0c282.857 0 512 163.429 512 365.714z"],
	commentFull: ["M1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571-12.571 1.143-24.571-8-27.429-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-201.714 229.143-365.714 512-365.714s512 163.429 512 365.714z"],
	starHalf: ["M677.714 546.857l146.857-142.857-241.143-35.429-17.143-34.286-90.857-184v550.286l33.714 17.714 181.714 96-34.286-202.857-6.857-37.714zM936 397.143l-207.429 202.286 49.143 285.714c4 25.143-5.143 40-22.857 40-6.286 0-14.286-2.286-22.857-6.857l-256.571-134.857-256.571 134.857c-8.571 4.571-16.571 6.857-22.857 6.857-17.714 0-26.857-14.857-22.857-40l49.143-285.714-208-202.286c-24.571-24.571-16.571-48.571 17.714-53.714l286.857-41.714 128.571-260c7.429-15.429 17.714-23.429 28-23.429v0c10.286 0 20 8 28 23.429l128.571 260 286.857 41.714c34.286 5.143 42.286 29.143 17.143 53.714z"],
	star: ["M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"],
	starFull: ["M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"],
	heart: ["M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"],
	heartFull: ["M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"],
	heartBroken: ["M755.188 64c148.382 0 268.812 120.44 268.812 268.832 0 292.21-315.824 382.842-511.978 679.418-207.522-298.424-512.022-377.572-512.022-679.418 0-148.392 120.426-268.832 268.808-268.832 60.354 0 115.99 27.53 160.796 67.834l-77.604 124.166 224 128-128 320 352-384-224-128 61.896-92.846c35.42-21.768 75.21-35.154 117.292-35.154z"],
	plane: ["M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"],
	user: ["M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"],
	upload: ["M731.429 493.714c0-4.571-1.714-9.714-5.143-13.143l-201.143-201.143c-3.429-3.429-8-5.143-13.143-5.143-4.571 0-9.714 1.714-13.143 5.143l-200.571 200.571c-3.429 4-5.714 8.571-5.714 13.714 0 10.286 8 18.286 18.286 18.286h128v201.143c0 9.714 8.571 18.286 18.286 18.286h109.714c9.714 0 18.286-8.571 18.286-18.286v-201.143h128c10.286 0 18.286-8.571 18.286-18.286zM1097.143 658.286c0 121.143-98.286 219.429-219.429 219.429h-621.714c-141.143 0-256-114.857-256-256 0-99.429 57.714-189.714 147.429-231.429-0.571-8.571-1.143-16.571-1.143-24.571 0-161.714 130.857-292.571 292.571-292.571 118.857 0 225.714 72 270.857 181.714 26.286-22.857 60-35.429 94.857-35.429 80.571 0 146.286 65.714 146.286 146.286 0 28-8 55.429-23.429 78.857 99.429 23.429 169.714 112 169.714 213.714z"],
	pencil: ["M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"],
	cancel: ["M656.571 641.143c0-9.714-4-18.857-10.857-25.714l-103.429-103.429 103.429-103.429c6.857-6.857 10.857-16 10.857-25.714s-4-19.429-10.857-26.286l-51.429-51.429c-6.857-6.857-16.571-10.857-26.286-10.857s-18.857 4-25.714 10.857l-103.429 103.429-103.429-103.429c-6.857-6.857-16-10.857-25.714-10.857s-19.429 4-26.286 10.857l-51.429 51.429c-6.857 6.857-10.857 16.571-10.857 26.286s4 18.857 10.857 25.714l103.429 103.429-103.429 103.429c-6.857 6.857-10.857 16-10.857 25.714s4 19.429 10.857 26.286l51.429 51.429c6.857 6.857 16.571 10.857 26.286 10.857s18.857-4 25.714-10.857l103.429-103.429 103.429 103.429c6.857 6.857 16 10.857 25.714 10.857s19.429-4 26.286-10.857l51.429-51.429c6.857-6.857 10.857-16.571 10.857-26.286zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"],
	camera: ["M420 928c68.709-118.625 136.494-238.172 206-356l156 270c-74 60-168 96-270 96-32 0-62-4-92-10zM104 640h414l-158 270c-122-46-216-146-256-270zM198 224c71.999 124.667 143.587 249.746 216 374h-320c-6-28-8-56-8-86 0-112 42-212 112-288zM930 426c6 28 8 56 8 86 0 112-42 212-112 288l-204-352-12-22h320zM920 384h-414l158-270c122 46 216 146 256 270zM402 448l-4 4-156-270c74-60 168-96 270-96 32 0 62 4 92 10z"],
	image: ["M365.714 329.143c0 60.571-49.143 109.714-109.714 109.714s-109.714-49.143-109.714-109.714 49.143-109.714 109.714-109.714 109.714 49.143 109.714 109.714zM950.857 548.571v256h-804.571v-109.714l182.857-182.857 91.429 91.429 292.571-292.571zM1005.714 146.286h-914.286c-9.714 0-18.286 8.571-18.286 18.286v694.857c0 9.714 8.571 18.286 18.286 18.286h914.286c9.714 0 18.286-8.571 18.286-18.286v-694.857c0-9.714-8.571-18.286-18.286-18.286zM1097.143 164.571v694.857c0 50.286-41.143 91.429-91.429 91.429h-914.286c-50.286 0-91.429-41.143-91.429-91.429v-694.857c0-50.286 41.143-91.429 91.429-91.429h914.286c50.286 0 91.429 41.143 91.429 91.429z"],
	settings: ["M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z"],
	exit: ["M768 640v-128h-320v-128h320v-128l192 192zM704 576v256h-320v192l-384-192v-832h704v320h-64v-256h-512l256 128v576h256v-192z"],
	follow: ['M402.286 512c-121.143 0-219.429-98.286-219.429-219.429s98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429-98.286 219.429-219.429 219.429zM950.857 585.143h201.143c9.714 0 18.286 8.571 18.286 18.286v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v201.143c0 9.714-8.571 18.286-18.286 18.286h-109.714c-9.714 0-18.286-8.571-18.286-18.286v-201.143h-201.143c-9.714 0-18.286-8.571-18.286-18.286v-109.714c0-9.714 8.571-18.286 18.286-18.286h201.143v-201.143c0-9.714 8.571-18.286 18.286-18.286h109.714c9.714 0 18.286 8.571 18.286 18.286v201.143zM530.286 713.143c0 40 33.143 73.143 73.143 73.143h146.286v136c-28 20.571-63.429 28.571-97.714 28.571h-499.429c-91.429 0-152.571-54.857-152.571-148 0-129.143 30.286-327.429 197.714-327.429 9.143 0 15.429 4 22.286 9.714 56 42.857 110.286 69.714 182.286 69.714s126.286-26.857 182.286-69.714c6.857-5.714 13.143-9.714 22.286-9.714 48.571 0 91.429 18.286 124 54.857h-127.429c-40 0-73.143 33.143-73.143 73.143v109.714z'],
	unfollow: ['M402.286 512c-121.143 0-219.429-98.286-219.429-219.429s98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429-98.286 219.429-219.429 219.429zM1017.714 694.857l142.286 142.286c3.429 3.429 5.143 8 5.143 13.143 0 4.571-1.714 9.143-5.143 12.571l-77.714 77.714c-3.429 3.429-8 5.143-12.571 5.143-5.143 0-9.714-1.714-13.143-5.143l-142.286-142.286-142.286 142.286c-3.429 3.429-8 5.143-13.143 5.143-4.571 0-9.143-1.714-12.571-5.143l-77.714-77.714c-3.429-3.429-5.143-8-5.143-12.571 0-5.143 1.714-9.714 5.143-13.143l142.286-142.286-142.286-142.286c-3.429-3.429-5.143-8-5.143-13.143 0-4.571 1.714-9.143 5.143-12.571l77.714-77.714c3.429-3.429 8-5.143 12.571-5.143 5.143 0 9.714 1.714 13.143 5.143l142.286 142.286 142.286-142.286c3.429-3.429 8-5.143 13.143-5.143 4.571 0 9.143 1.714 12.571 5.143l77.714 77.714c3.429 3.429 5.143 8 5.143 12.571 0 5.143-1.714 9.714-5.143 13.143zM733.143 694.857l-103.429 103.429c-13.714 13.714-21.143 32.571-21.143 52 0 18.857 7.429 37.714 21.143 51.429l47.429 47.429c-8 1.143-16.571 1.714-25.143 1.714h-499.429c-91.429 0-152.571-54.857-152.571-148 0-129.143 30.286-327.429 197.714-327.429 9.143 0 15.429 4 22.286 9.714 54.857 43.429 110.857 69.714 182.286 69.714s127.429-26.286 182.286-69.714c6.857-5.714 13.143-9.714 22.286-9.714 10.857 0 21.714 1.143 32.571 3.429-18.857 18.286-30.857 33.143-30.857 60.571 0 19.429 7.429 38.286 21.143 52z'],
	search: ['M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z'],
}

const size = "30px";

const buttonSVG = (props) => {
	return (
		<button
			className={"icon_BTN " + props.className}
			style={props.style || null}
			onClick={props.action || null}>
			<svg
				width={size}
				height={size}
				viewBox="0 0 1024 1024">
				{
					icons[props.icon].map(p => {
						return <path d={p} fill={'#0C0058'}></path>
					})
				}

			</svg>
		</button>
	)
}
export default buttonSVG;


export const SVG = (props) => {
	return (
		<svg
			className={props.className}
			width={props.size || size}
			height={props.size || size}
			viewBox="0 0 1024 1024">
			{
				icons[props.icon].map(p => {
					return <path d={p} fill={'#0C0058'}></path>
				})
			}
		</svg>
	)
}