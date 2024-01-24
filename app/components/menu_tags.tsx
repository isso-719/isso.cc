import * as fs from "fs";

const MenuTags = ({jsonPath, tagName}: { jsonPath: string, tagName?: string }) => {
    const tags = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

    let titleColor = "text-pink-500";
    if (tagName) {
        titleColor = "text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400";
    }
    return (
        <div className="px-6 py-4">
            <h3>
                <a className={`font-bold uppercase  ${titleColor}`} href="/blog">
                    All Posts
                </a>
            </h3>
            <ul>
                {Object.keys(tags).map((tag) => {
                    if (tagName && tagName === tag) {
                        return (
                            <li className="py-1" key={tag}>
                                <a className="text-sm font-medium uppercase text-pink-600 dark:text-pink-400"
                                   href={`/tags/${tag}`}>
                                    {tag} ({tags[tag].count})
                                </a>
                            </li>
                        );
                    }
                    return (
                        <li className="py-1" key={tag}>
                            <a className="text-sm font-medium uppercase text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                               href={`/tags/${tag}`}>
                                {tag} ({tags[tag].count})
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MenuTags;