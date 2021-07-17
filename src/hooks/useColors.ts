import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useAtom, useAction } from '@reatom/react';

import { colorAtom, setColor as setColorAction } from '../store';

type ColorsQueryResult = {
  allAlvColorsJson: {
    edges: { node: AvlColor }[]
  }
};

const useColors = ()
  : {
    colors: AvlColor[];
    colorId: string;
    setColor: (colorId: string) => void;
  } => {
  const alvColorsNodes = useStaticQuery<ColorsQueryResult>(
    graphql`
      query alvColors {
        allAlvColorsJson {
          edges {
            node {
              id
              col
              int
              inv
              backgroundColor
              textColor
            }
          }
        }
      }
    `,
  ).allAlvColorsJson.edges;

  const colors = useMemo(() => alvColorsNodes.map((colorNode) => colorNode.node), [alvColorsNodes]);
  const colorId = useAtom(colorAtom, (currentColor) => currentColor ?? colors[0].id, [colors]);

  const setColor = useAction(setColorAction);

  return {
    colors,
    colorId,
    setColor,
  };
};

export default useColors;
