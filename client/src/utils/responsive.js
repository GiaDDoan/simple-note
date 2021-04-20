export const size = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
};

export const device = {
  mobile: `(max-width: ${size.mobile}px)`,
  smallTablet: `(max-width: ${size.tablet}px)`,
  tablet: `(max-width: ${size.desktop}px)`,
  largeDesktop: `(min-width: ${size.largeDesktop}px)`,
};

// export const onSmallPhoneMediaQuery = (): string => `
//   @media ${device.smallPhone}
// `;
// export const onSmallTabletMediaQuery = (): string => `
//   @media ${device.smallTablet}
// `;
// export const onTabletMediaQuery = (): string => `
//   @media ${device.tablet}
// `;
// export const onLargeDesktopMediaQuery = (): string => `
//   @media ${device.largeDesktop}
// `;
