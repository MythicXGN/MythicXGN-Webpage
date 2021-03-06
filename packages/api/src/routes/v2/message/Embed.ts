import { EmbedAuthor, EmbedFooter, EmbedImage } from "@api";

export class Embed {
	public title?: string;

	public description?: string;

	public url?: string;

	public timestamp?: string;

	public color?: number;

	public footer: EmbedFooter = {};

	public image: EmbedImage = {};

	public author: EmbedAuthor = {};
}
