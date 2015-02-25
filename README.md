# Chronicle Firefox Add-on

## Install

- Firefox (<http://www.firefox.com/>)
- Firefox Add-on SDK (<https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation>)

## Run

- `cfx run` will start an instance of Firefox with an empty profile

## Build

### Firefox Add-on - Desktop and Mobile 

- Desktop: `cfx xpi` will build an xpi that can be installed in Firefox
- Mobile: `cfx xpi --force-mobile` will build an xpi that can be installed in Firefox for Android

### Chrome Extension

- Win: `chrome.exe --pack-extension=c:\PATH_TO_EXT_ROOT --pack-extension-key=c:\EXT_KEY.pem`
- Mac: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome  --pack-extension=/PATH_TO_EXT_ROOT --pack-extension-key=/EXT_KEY.pem`
- Lnx: `./chrome --pack-extension=c:\PATH_TO_EXT_ROOT --pack-extension-key=c:\EXT_KEY.pem`

_Note: pem file is only needed when packaging for public distribution_
