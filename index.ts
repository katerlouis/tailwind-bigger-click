import plugin from 'tailwindcss/plugin';

type BiggerClickDirection = 'x' | 'y' | 'both'

export default plugin(function({ matchUtilities, theme }) {
  const spacing = theme('spacing');

  function getBiggerClickFn(direction: BiggerClickDirection = 'both') {
    const isX = ['both', 'x'].includes(direction);
    const isY = ['both', 'y'].includes(direction);

    return (value) => {
      return {
        '&::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: isY && `-${value}`,
          bottom: isY && `-${value}`,
          left: isX && `-${value}`,
          right: isX && `-${value}`,
        },
      };
    };
  }

  matchUtilities(
    {
      // @ts-expect-error we need to import CSSRuleObject from tailwindcss
      'bigger-click': getBiggerClickFn('both'),
      // @ts-expect-error we need to import CSSRuleObject from tailwindcss
      'bigger-click-x': getBiggerClickFn('x'),
      // @ts-expect-error we need to import CSSRuleObject from tailwindcss
      'bigger-click-y': getBiggerClickFn('y'),
    },
    {
      values: spacing,
    }
  );
});
