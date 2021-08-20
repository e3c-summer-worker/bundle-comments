import * as core from '@actions/core'
import { prependComment } from './file'

const getInputs = (): Inputs => {
    const name: string = core.getInput('name')
    const comment: string = core.getInput('comment')
    const filePath: string = core.getInput('filePath')
    return { name, comment, filePath }
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
    comment: string
    filePath: string
}

const formatComment = ({ name, comment }: Inputs): string => {
    const sha = process.env.GITHUB_SHA as string
    const repo = process.env.GITHUB_REPOSITORY as string
    const server = process.env.GITHUB_SERVER_URL as string
    return `/**
 * ${name} - Edmonton Christian Community Church
 * Created via commit ${sha} at ${repo}
 * ${comment}
 * ${server}/${repo}/commit/${sha}
 */
`
}

run()
