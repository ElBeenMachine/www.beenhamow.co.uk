import { parser } from "html-metadata-parser";

export default async function (req, res) {
    if (!req?.query?.url)
        res.status(200).redirect("/img/metadata/no-meta.jpg");
    try {
        const metadata = await parser(req.query.url);
        if (!metadata?.og?.image)
            return res.status(200).redirect("/img/metadata/no-meta.jpg");
        res.status(200).redirect(metadata.og.image);
    } catch (error) {
        res.status(200).redirect("/img/metadata/no-meta.jpg");
    }
}
