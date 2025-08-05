import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const base = src.replace(".jpg", "");
	return (
		<article>
			<Anchor href={`/photos/${id}`}>
				<picture>
          <source
            type="image/avif"
            srcSet={`${base}.avif 1x, ${base}@2x.avif 2x, ${base}@3x.avif 3x`}
          />
          <source
            type="image/jpeg"
            srcSet={`${base}.jpg 1x, ${base}@2x.jpg 2x, ${base}@3x.jpg 3x`}
          />
          <Image src={src} alt={alt} />
        </picture>
			</Anchor>
			<Tags>
				{tags.map((tag) => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</Tags>
		</article>
	);
};

const Anchor = styled.a`
	text-decoration: none;
	color: inherit;
	outline-offset: 4px;
`;

const Image = styled.img`
	display: block;
	width: 100%;
	object-fit: cover;
	/* height: 300px; */
	aspect-ratio: 1 / 1;
	border-radius: 2px;
	margin-bottom: 8px;
`;

const Tags = styled.ul`
	/* display: flex;
	flex-wrap: wrap;
	gap: 8px; */
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding: 4px 0;
`;

const Tag = styled.li`
	display: inline;
	padding: 4px 8px;
	background: var(--color-gray-300);
	font-size: 0.875rem;
	font-weight: 475;
	color: var(--color-gray-800);
	&:not(:last-of-type) {
		margin-right: 8px;
	}
`;

export default PhotoGridItem;
