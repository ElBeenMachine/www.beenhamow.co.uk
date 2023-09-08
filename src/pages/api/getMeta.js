import { parser } from "html-metadata-parser";

export default async function (req, res) {
    if (!req?.query?.url) {
        res.status(200).redirect("/img/metadata/no-meta.webp");
        return;
    }

    try {
        const metadata = await parser(req.query.url);
        if (!metadata?.og?.image) {
            res.status(200).redirect("/img/metadata/no-meta.webp");
            return;
        }
        res.status(200).redirect(metadata.og.image);
        return;
    } catch (error) {
        res.status(200).redirect("/img/metadata/no-meta.webp");
        return;
    }
}
