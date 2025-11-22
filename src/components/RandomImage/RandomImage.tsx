import { useCallback, useEffect,  useState } from 'react'
import { IContentEntry } from '../../types/contentfulTypes';
import './Randomimage.scss';
import config from '../../config/config.mjs';
import { shuffleArray } from './generateRandomImageIndex';

const RandomImage = ({
	contentEntry,
}: {
	contentEntry: IContentEntry,
	}
): JSX.Element => {
	const {
		backgroundImagesCollection,
	} = contentEntry;

	const [loader, setLoader] = useState(true);
	const [backImage, setBackImage] = useState<string[]>([]);
	const [imageCount, setImageCount] = useState<number>(0);
	const loaderCSSUrl: string = `url(${config.backgroundSpinnerUrl})`;

	const createBackgroundCSSUrls = useCallback(() => {
		const images = backgroundImagesCollection.map((item) => `url(https:${item.fields.file.url})`);
		images.unshift(loaderCSSUrl);
		setBackImage(images);
		setImageCount(Number(images.length));
	}, [backgroundImagesCollection, loaderCSSUrl]);

	useEffect(() => {
		const imageChanger = setInterval(() => {
			if (loader) {
				createBackgroundCSSUrls();
				setLoader(false);
			}

			setImageCount((prev): number => {
				if (prev === 1) {
					setBackImage((prev) =>  shuffleArray(prev));
					return backImage.length;
				}

				return prev - 1;
			});

		}, 10000);

		return () => {
			clearInterval(imageChanger);
		}
	}, [loader, backImage, loaderCSSUrl, imageCount, createBackgroundCSSUrls]);

	return (
		<>
		{
			loader ? (
				<div className="default-back-image-container" />
			) :
				<div className="back-image-container" style={{backgroundImage: backImage[imageCount]}} />
		}
		</>
	);
};

export default RandomImage;
