# frozen_string_literal: true

# 出力先logの指定
set :output, 'log/crontab.log'
# 実行環境の指定
set :environment, :production

every 1.minute do
  rake 'sample_task:test'
  rake 'sample_task:test2'
end
