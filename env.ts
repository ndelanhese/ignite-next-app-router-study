import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_IMAGES_DOMAINS: z.string(),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables:',
    parsedEnv.error.flatten().fieldErrors,
  )
  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
