import { Guild } from 'discord.js'
import Demina from '..'
import Command from '../Command'

export = (guild: Guild | null, command: Command, instance: Demina) => {
  const { testOnly } = command

  if (!testOnly) {
    return true
  }

  return guild && instance.testServers.includes(guild.id)
}
