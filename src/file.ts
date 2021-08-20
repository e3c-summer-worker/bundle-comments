import * as fs from 'fs/promises'

const prependComment = async (filePath: string, commentStr: string): Promise<void> => {
    try {
        const file = await fs.readFile(filePath); // read existing contents into data
        const comment = Buffer.from(commentStr); // create buffer from comment

        const newFile = Buffer.concat([comment, file]); // prepend comment to file contents

        await fs.writeFile(filePath, newFile); // append buffer to file
        console.log('Successfully prepended comment to file!');
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

export { prependComment }