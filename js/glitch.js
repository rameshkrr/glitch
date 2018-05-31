jQuery(function (t) {
	t("#mainpage").length > 0 ? (setInterval(function () {
		var e = t(".text1").data("title");
		x = Math.floor(Math.random() * (e.length - 1)) + 1, setTimeout(function () {
			var e = t(".text1").data("title"),
				a = Math.random().toString(18).slice(2).substr(0, 1),
				s = e.substr(0, x) + a + e.substr(x + 1, e.length);
			t(".text1").html(s), setTimeout(function () {
				var e = t(".text1").data("title"),
					a = Math.random().toString(18).slice(2).substr(0, 1),
					s = e.substr(0, x) + a + e.substr(x + 1, e.length);
				t(".text1").html(s), setTimeout(function () {
					var e = t(".text1").data("title"),
						a = Math.random().toString(18).slice(2).substr(0, 1),
						s = e.substr(0, x) + a + e.substr(x + 1, e.length);
					t(".text1").html(s), setTimeout(function () {
						var e = t(".text1").data("title"),
							a = Math.random().toString(18).slice(2).substr(0, 1),
							s = e.substr(0, x) + a + e.substr(x + 1, e.length);
						t(".text1").html(s), setTimeout(function () {
							var e = t(".text1").data("title");
							t(".text1").html(e)
						}, 50)
					}, 50)
				}, 50)
			}, 50)
		}, 50)
	}, 4500), setInterval(function () {
		var e = t(".text2").data("title");
		x = Math.floor(Math.random() * (e.length - 1)) + 1, setTimeout(function () {
			var e = t(".text2").data("title"),
				a = Math.random().toString(18).slice(2).substr(0, 1),
				s = e.substr(0, x) + a + e.substr(x + 1, e.length);
			t(".text2").html(s), setTimeout(function () {
				var e = t(".text2").data("title"),
					a = Math.random().toString(18).slice(2).substr(0, 1),
					s = e.substr(0, x) + a + e.substr(x + 1, e.length);
				t(".text2").html(s), setTimeout(function () {
					var e = t(".text2").data("title"),
						a = Math.random().toString(18).slice(2).substr(0, 1),
						s = e.substr(0, x) + a + e.substr(x + 1, e.length);
					t(".text2").html(s), setTimeout(function () {
						var e = t(".text2").data("title"),
							a = Math.random().toString(18).slice(2).substr(0, 1),
							s = e.substr(0, x) + a + e.substr(x + 1, e.length);
						t(".text2").html(s), setTimeout(function () {
							var e = t(".text2").data("title");
							t(".text2").html(e)
						}, 50)
					}, 50)
				}, 50)
			}, 50)
		}, 50)
	}, 2500)) : setInterval(function () {
		var e = t(".logotype a").data("title");
		x = Math.floor(Math.random() * (e.length - 1)) + 1, setTimeout(function () {
			var e = t(".logotype a").data("title"),
				a = Math.random().toString(18).slice(2).substr(0, 1),
				s = e.substr(0, x) + a + e.substr(x + 1, e.length);
			t(".logotype a").html(s), setTimeout(function () {
				var e = t(".logotype a").data("title"),
					a = Math.random().toString(18).slice(2).substr(0, 1),
					s = e.substr(0, x) + a + e.substr(x + 1, e.length);
				t(".logotype a").html(s), setTimeout(function () {
					var e = t(".logotype a").data("title"),
						a = Math.random().toString(18).slice(2).substr(0, 1),
						s = e.substr(0, x) + a + e.substr(x + 1, e.length);
					t(".logotype a").html(s), setTimeout(function () {
						var e = t(".logotype a").data("title"),
							a = Math.random().toString(18).slice(2).substr(0, 1),
							s = e.substr(0, x) + a + e.substr(x + 1, e.length);
						t(".logotype a").html(s), setTimeout(function () {
							var e = t(".logotype a").data("title");
							t(".logotype a").html(e)
						}, 50)
					}, 50)
				}, 50)
			}, 50)
		}, 50)
	}, 2500)
});