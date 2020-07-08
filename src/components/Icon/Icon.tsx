import React, { useEffect, useState } from 'react';
import { Image, ImageStyleProps } from './styles';
import { icons } from './icons';

interface IconProps extends ImageStyleProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, size }) => {
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState<any>({});

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const iconPath = await import(
          `../../assets/weather-icons/wi-${icons[name].icon}.svg`
        );
        setPath(iconPath);
      } catch (err) {
        setPath({});
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && path.default) {
    return <Image data-testid='icon' src={path.default} size={size} />;
  }

  return null;
};
export default Icon;
