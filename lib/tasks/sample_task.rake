namespace :sample_task do
  desc 'テスト用'
  task :test do
    Rails.logger.info('testtesttest')
  end
end