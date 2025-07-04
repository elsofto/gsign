export interface GSignPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
