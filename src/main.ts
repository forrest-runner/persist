import * as core from '@actions/core'
import { exec } from '@actions/exec'
import { writeFile } from 'node:fs/promises'

export async function run(): Promise<void> {
  try {
    const token: string = core.getInput('token')

    await exec('sudo fstrim /')

    await writeFile('~/config/persist', token)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
