up:
	cd ./blog/ && hugo build
	docker compose up -d

.PHONY: clean
clean:
	docker compose down

.PHONY: blog-publish
blog-publish:
	@echo "Rebuilding blogs content..."
	rm -r ./blog/content/** && rm -r ./blog/assets/
	mkdir -p ./blog/content/ && mkdir -p ./blog/assets/
	cp -r ~/notes/assets/. ~/homelab/blog/static/assets
	obsidian-export ~/notes ~/homelab/blog/content/ --start-at ~/notes/blogs
	cd ./blog/ && hugo build
	@echo "Done!"
