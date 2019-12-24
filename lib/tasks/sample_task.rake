# frozen_string_literal: true

namespace :sample_task do
  desc 'テスト用'
  task :test do
    puts 'Hellooooooooooooooooooooo, World'
  end

  desc 'テスト2用'
  task :test2 do
    puts 'Hello, World'
  end
end
