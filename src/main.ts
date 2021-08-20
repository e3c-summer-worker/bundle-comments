import * as core from '@actions/core'
import { prependComment } from './file'

const getInputs = (): Inputs => {
    const name: string = core.getInput('name')
    const sha: string = core.getInput('sha')
    const comment: string = core.getInput('comment')
    const repoLink: string = core.getInput('repoLink')
    const filePath: string = core.getInput('filePath')
    return { name, sha, comment, repoLink, filePath }
}

const run = async (): Promise<void> => {
    try {
        const inputs = getInputs()
        const comment = formatComment(inputs)

        const workspace = process.env.GITHUB_WORKSPACE as string
        const filePath = `${workspace}/${inputs.filePath}`

        await prependComment(filePath, comment)
    } catch (error) {
        core.setFailed(error.message)
    }
}

interface Inputs {
    name: string
    sha: string
    comment: string
    repoLink: string
    filePath: string
}

const formatComment = ({ name, sha, comment, repoLink }: Inputs): string => `
/**
 * ${name} - Edmonton Christian Community Church
 * Created via commit ${sha} at ${repoLink}
 * ${comment}
 * ${repoLink}/commit/${sha}
 */

`

run()
