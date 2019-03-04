export interface Options {
	/**
	 * **Don't use this option unless you really have to!**
	 *
	 * Suffix appended to the project name to avoid name conflicts with native apps. Pass an empty string to disable it.
	 *
	 * @default 'nodejs'
	 */
	readonly suffix?: string;
}

export interface Paths {
	/**
	 * Directory for data files.
	 */
	readonly data: string;

	/**
	 * Directory for data files.
	 */
	readonly config: string;

	/**
	 * Directory for non-essential data files.
	 */
	readonly cache: string;

	/**
	 * Directory for log files.
	 */
	readonly log: string;

	/**
	 * Directory for temporary files.
	 */
	readonly temp: string;
}

/**
 * Get paths for storing things like data, config, cache, etc.
 *
 * @param name - Name of your project. Used to generate the paths.
 * @returns The paths to use for your project on current OS.
 */
export default function envPaths(name: string, options?: Options): Paths;
